export interface ModalContextData {
  blockGestures: () => void;
  setComponent: (component: JSX.Element, hasToast?: boolean) => void;
  hide: () => void;
  onHide: (callback: () => void) => void;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  setHandleColor: React.Dispatch<React.SetStateAction<string>>;
  setBackgroundInteraction: React.Dispatch<React.SetStateAction<boolean>>;
}
