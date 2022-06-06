import React from 'react';
import { Keyboard, StatusBar } from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { View } from '#common/components/primitives';

import { useBackHandler } from '../BackHandler';
import { useTheme } from '../ThemeContext';
import { ModalContextData } from './types';

const ModalContext = React.createContext<ModalContextData>(
  {} as ModalContextData
);

export const ModalProvider: React.FC = ({ children }) => {
  const { theme } = useTheme();

  const opacity = 0.6;
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const initialSnapPoints = React.useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedSnapPoints,
    handleContentLayout,
    animatedHandleHeight,
    animatedContentHeight,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const [Component, setComponentState] = React.useState(null);
  const [callbackFunc, setCallbackFunc] = React.useState<() => () => void>();
  const [handleColor, setHandleColor] = React.useState<string>('');
  const [backgroundColor, setBackgroundColor] = React.useState<string>('');
  const [backgroundInteraction, setBackgroundInteraction] =
    React.useState(true);

  const [isGestureActive, toggleGesture] = React.useReducer(
    (state) => !state,
    true
  );

  // Disable content panning gesture interaction.
  const blockGestures = React.useCallback(() => {
    toggleGesture();
  }, []);

  // Set the sheet content
  const setComponent = React.useCallback((value) => {
    setComponentState(value);
  }, []);

  const onHide = React.useCallback((callback: () => void) => {
    if (callback) setCallbackFunc(() => callback);
  }, []);

  // Snap to the minimum provided point from snapPoints.
  const hide = React.useCallback(() => {
    // enable gestures if it had been previously deactivated
    if (!isGestureActive) {
      toggleGesture();
      setComponentState(null);
    }

    // executes callback function
    if (callbackFunc) callbackFunc();

    bottomSheetRef.current?.close();

    setTimeout(() => {
      setComponentState(null);
      setCallbackFunc(undefined);
      setHandleColor('');
      setBackgroundColor('');
      setBackgroundInteraction(true);
    }, 100);
  }, [callbackFunc, isGestureActive]);

  // Callback when the sheet about to animate to a new position.
  const onAnimateBottomSheet = React.useCallback(
    (fromIndex: number, toIndex: number) => {
      if (fromIndex === 0 && toIndex === -1) {
        hide();
      }
    },
    [hide]
  );

  const selectorBottomSheetStyle = React.useCallback(() => {
    return {
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    };
  }, []);

  // Component to be placed as a sheet backdrop.
  const renderBackdrop = React.useCallback(
    (props) => (
      <>
        {backgroundInteraction && (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            enableTouchThrough={false}
            pressBehavior={isGestureActive ? 'close' : 'none'}
            opacity={opacity}
            style={{
              ...props.style,
              backgroundColor: theme.colors.fxGray,
            }}
          />
        )}
        <></>
      </>
    ),
    [backgroundInteraction, isGestureActive, opacity, theme.colors]
  );

  useBackHandler(() => {
    if (Component) {
      hide();
    }

    return true;
  });

  const contextValue = React.useMemo(
    () => ({
      hide,
      setComponent,
      blockGestures,
      setBackgroundColor,
      setBackgroundInteraction,
      setHandleColor,
      onHide,
    }),
    [
      blockGestures,
      hide,
      setComponent,
      setBackgroundColor,
      setBackgroundInteraction,
      setHandleColor,
      onHide,
    ]
  );

  const selectorHandleComponent = React.useCallback(() => {
    return (
      <View
        bg={backgroundColor || theme.colors.background}
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <View
          bg={handleColor || theme.colors.accent}
          mt={12}
          rounded={8}
          w={48}
          h={8}
        />
      </View>
    );
  }, [
    backgroundColor,
    handleColor,
    theme.colors.accent,
    theme.colors.background,
  ]);

  React.useEffect(() => {
    if (Component) {
      Keyboard.dismiss();

      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 300);
    }
  }, [Component]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}

      {Component && (
        <>
          <StatusBar backgroundColor="transparent" />

          <BottomSheet
            ref={bottomSheetRef}
            snapPoints={animatedSnapPoints}
            handleHeight={animatedHandleHeight}
            backgroundStyle={{
              backgroundColor: backgroundColor || theme.colors.background,
            }}
            contentHeight={animatedContentHeight}
            onAnimate={onAnimateBottomSheet}
            backdropComponent={renderBackdrop}
            handleComponent={selectorHandleComponent}
            enablePanDownToClose={isGestureActive}
            enableContentPanningGesture={isGestureActive}
            enableHandlePanningGesture={isGestureActive}
            keyboardBehavior="interactive"
            keyboardBlurBehavior="restore"
            style={{
              overflow: 'hidden',
              ...selectorBottomSheetStyle(),
            }}
          >
            <BottomSheetView
              onLayout={handleContentLayout}
              style={{
                paddingBottom: getBottomSpace(),
                backgroundColor: backgroundColor || theme.colors.background,
              }}
            >
              {Component}
            </BottomSheetView>
          </BottomSheet>
        </>
      )}
    </ModalContext.Provider>
  );
};

/**
 * @function setComponent
 * Set the sheet content
 * @type JSX.Element
 * @default null
 *
 * @function hide
 * Snap to the minimum provided point from snapPoints.
 *
 * @function setHandleColor
 * Set the sheet handle color
 * @type string
 * @default '#D9DBE9'
 *
 * @function setBackgroundColor
 * Set the sheet background color
 * @type string
 * @default '#fff'
 *
 * @function blockGestures
 * Disable pan down gesture to close the sheet.
 * @default false
 *
 * @function toggleGesture
 * Toggle the gesture scenario.
 *
 * @constant isGestureActive
 * If the gesture is active.
 *
 * @function setBackgroundInteraction
 * activates interaction with the background screen. default: true.
 *
 * @constant opacity
 * set BottomSheetBackdrop opacity. default: theme.
 */
export const useModal = (): ModalContextData => {
  const context = React.useContext(ModalContext);

  return context;
};
