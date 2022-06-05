import React from 'react';
import { ScrollView as RNScrollView } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { ScrollableView } from './scrollview.styles';
import { ScrollViewProps, ScrollViewRef } from './scrollview.types';

const ScrollView = React.forwardRef<ScrollViewRef, ScrollViewProps>(
  (incoming, ref) => {
    const { children, alignItems, justifyContent, flex, ...rest } = incoming;

    const scrollRef = React.useRef<RNScrollView>(null);

    const scrollToTop = React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: true });
    }, []);

    React.useImperativeHandle(ref, () => ({
      scrollToTop,
    }));

    return (
      <ScrollableView
        {...rest}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex,
          flexGrow: 1,
          alignItems,
          justifyContent,
          paddingBottom: getBottomSpace(),
        }}
      >
        {children}
      </ScrollableView>
    );
  }
);

export { ScrollView };
