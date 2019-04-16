interface MSNativeColorPanelPresenterUninitialized<InitializedType = MSNativeColorPanelPresenter> extends NSResponderUninitialized<MSNativeColorPanelPresenter> {
  initWithNextResponderView_delegate(nextResponderView: NSView, delegate: any): InitializedType;
}

interface MSNativeColorPanelPresenter extends NSResponder {
  presentWithColor(color: NSColor): boolean;
  closeColorPanel(): void;
}

declare const MSNativeColorPanelPresenter: {
  alloc(): MSNativeColorPanelPresenterUninitialized;
  class(): MSNativeColorPanelPresenter;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

