interface MSShapeEventHandlerUninitialized<InitializedType = MSShapeEventHandler> extends MSEventHandlerUninitialized<MSShapeEventHandler> {}

interface MSShapeEventHandler extends MSEventHandler, INSTextDelegate, INSMenuDelegate, IMSGestureRecognizerDelegate {
  forceSelection(sender: NSButton): IBAction;
  pathDidOpenOrClose(): void;
  refreshCloseOrOpenPathUI(): void;
  textShouldBeginEditing(textObject: NSText): boolean;
  textShouldEndEditing(textObject: NSText): boolean;
  textDidBeginEditing(notification: NSNotification): void;
  textDidEndEditing(notification: NSNotification): void;
  textDidChange(notification: NSNotification): void;
  menuNeedsUpdate(menu: NSMenu): void;
  numberOfItemsInMenu(menu: NSMenu): NSInteger;
  menu_updateItem_atIndex_shouldCancel(menu: NSMenu, item: NSMenuItem, index: NSInteger, shouldCancel: boolean): boolean;
  menuHasKeyEquivalent_forEvent_target_action(menu: NSMenu, event: NSEvent, target: any, action: string): boolean;
  menuWillOpen(menu: NSMenu): void;
  menuDidClose(menu: NSMenu): void;
  menu_willHighlightItem(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenu_onScreen(menu: NSMenu, screen: NSScreen | null): NSRect;
  gestureRecognizer_shouldAttemptToRecognizeAtPoint_modifierFlags(gestureRecognizer: MSGestureRecognizer, point: NSPoint, flags: NSEventModifierFlags): boolean;

  layers(): NSArray<any>;
  canvasHandler(): MSVectorCanvas;
  inspectorViewController(): MSEditShapeInspectorViewController;
  pathController(): MSPathController;
  editingBehavior(): MSShapeEditingBehavior;
  setEditingBehavior(editingBehavior: MSShapeEditingBehavior): void;
}

declare const MSShapeEventHandler: {
  alloc(): MSShapeEventHandlerUninitialized;
  class(): MSShapeEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

