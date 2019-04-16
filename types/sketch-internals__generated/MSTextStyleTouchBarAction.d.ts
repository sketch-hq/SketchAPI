interface MSTextStyleTouchBarActionUninitialized<InitializedType = MSTextStyleTouchBarAction> extends MSDocumentActionUninitialized<MSTextStyleTouchBarAction> {}

interface MSTextStyleTouchBarAction extends MSDocumentAction, INSTouchBarDelegate {
  touchBar_makeItemForIdentifier(touchBar: NSTouchBar, identifier: NSTouchBarItemIdentifier): NSTouchBarItem;
}

declare const MSTextStyleTouchBarAction: {
  alloc(): MSTextStyleTouchBarActionUninitialized;
  class(): MSTextStyleTouchBarAction;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

