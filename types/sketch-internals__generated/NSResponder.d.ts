interface NSResponderUninitialized<InitializedType = NSResponder> extends NSObjectUninitialized<NSResponder> {
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSResponder extends NSObject, INSCoding {
  interfaceStyle(): NSInterfaceStyle;
  setInterfaceStyle(interfaceStyle: NSInterfaceStyle): void;
  tryToPerform_with(action: string, object: any | null): boolean;
  performKeyEquivalent(event: NSEvent): boolean;
  validRequestorForSendType_returnType(sendType: NSPasteboardType | null, returnType: NSPasteboardType | null): any;
  mouseDown(event: NSEvent): void;
  rightMouseDown(event: NSEvent): void;
  otherMouseDown(event: NSEvent): void;
  mouseUp(event: NSEvent): void;
  rightMouseUp(event: NSEvent): void;
  otherMouseUp(event: NSEvent): void;
  mouseMoved(event: NSEvent): void;
  mouseDragged(event: NSEvent): void;
  scrollWheel(event: NSEvent): void;
  rightMouseDragged(event: NSEvent): void;
  otherMouseDragged(event: NSEvent): void;
  mouseEntered(event: NSEvent): void;
  mouseExited(event: NSEvent): void;
  keyDown(event: NSEvent): void;
  keyUp(event: NSEvent): void;
  flagsChanged(event: NSEvent): void;
  tabletPoint(event: NSEvent): void;
  tabletProximity(event: NSEvent): void;
  cursorUpdate(event: NSEvent): void;
  magnifyWithEvent(event: NSEvent): void;
  rotateWithEvent(event: NSEvent): void;
  swipeWithEvent(event: NSEvent): void;
  beginGestureWithEvent(event: NSEvent): void;
  endGestureWithEvent(event: NSEvent): void;
  smartMagnifyWithEvent(event: NSEvent): void;
  touchesBeganWithEvent(event: NSEvent): void;
  touchesMovedWithEvent(event: NSEvent): void;
  touchesEndedWithEvent(event: NSEvent): void;
  touchesCancelledWithEvent(event: NSEvent): void;
  quickLookWithEvent(event: NSEvent): void;
  pressureChangeWithEvent(event: NSEvent): void;
  noResponderFor(eventSelector: string): void;
  becomeFirstResponder(): boolean;
  resignFirstResponder(): boolean;
  interpretKeyEvents(eventArray: NSArray<any> | any[]): void;
  flushBufferedKeyEvents(): void;
  showContextHelp(sender: any | null): void;
  helpRequested(eventPtr: NSEvent): void;
  shouldBeTreatedAsInkEvent(event: NSEvent): boolean;
  wantsScrollEventsForSwipeTrackingOnAxis(axis: NSEventGestureAxis): boolean;
  wantsForwardedScrollEventsForAxis(axis: NSEventGestureAxis): boolean;
  supplementalTargetForAction_sender(action: string, sender: any | null): any;
  validateProposedFirstResponder_forEvent(responder: NSResponder, event: NSEvent | null): boolean;
  presentError_modalForWindow_delegate_didPresentSelector_contextInfo(error: NSError, window: NSWindow, delegate: any | null, didPresentSelector: string | null, contextInfo: void | null): void;
  presentError(error: NSError): boolean;
  willPresentError(error: NSError): NSError;
  performTextFinderAction(sender: any | null): void;
  newWindowForTab(sender: any | null): IBAction;
  performMnemonic(string: NSString | string): boolean;
  makeTouchBar(): NSTouchBar;
  updateUserActivityState(userActivity: NSUserActivity): void;
  encodeRestorableStateWithCoder(coder: NSCoder): void;
  encodeRestorableStateWithCoder_backgroundQueue(coder: NSCoder, queue: NSOperationQueue): void;
  restoreStateWithCoder(coder: NSCoder): void;
  invalidateRestorableState(): void;
  followsResponder(aResponder: NSResponder): boolean;
  encodeWithCoder(aCoder: NSCoder): void;

  nextResponder(): NSResponder;
  setNextResponder(nextResponder: NSResponder): void;
  acceptsFirstResponder(): boolean;
  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  undoManager(): NSUndoManager;
  touchBar(): NSTouchBar;
  setTouchBar(touchBar: NSTouchBar): void;
  userActivity(): NSUserActivity;
  setUserActivity(userActivity: NSUserActivity): void;
  supportsTouchBar(): boolean;
}

declare const NSResponder: {
  alloc(): NSResponderUninitialized;
  class(): NSResponder;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

