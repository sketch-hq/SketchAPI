interface MSEventHandlerManagerUninitialized<InitializedType = MSEventHandlerManager> extends NSObjectUninitialized<MSEventHandlerManager> {
  initWithDelegate(delegate: any): InitializedType;
}

interface MSEventHandlerManager extends NSObject {
  setCurrentHandler_force(handler: MSEventHandler | null, force: boolean): void;
  handlerForClass(aClass: any): MSEventHandler;
  switchToEventHandlerClass(handlerClass: any): MSEventHandler;
  toggleHandlerClass(handlerClass: any): MSEventHandler;
  drawInRect_context(dirtyRect: NSRect, context: MSRenderingContext): void;
  sendMouseDownEvent(event: NSEvent): void;
  sendMouseDraggedEvent(event: NSEvent): void;
  sendMouseUpEvent(event: NSEvent): void;
  sendMouseMovedEvent(event: NSEvent): void;
  recordEvent(event: NSEvent): void;
  selectionDidChangeTo(layers: MSLayerArray): void;
  prepareToDraw(treeDiff: MSTreeDiff): void;

  document(): MSDocument;
  setDocument(document: MSDocument): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  currentHandler(): MSEventHandler;
  setCurrentHandler(currentHandler: MSEventHandler): void;
  normalHandler(): MSNormalEventHandler;
  lastMouseDownClickCount(): NSInteger;
  lastEventType(): MSEventType;
}

declare const MSEventHandlerManager: {
  alloc(): MSEventHandlerManagerUninitialized;
  class(): MSEventHandlerManager;
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
  accessInstanceVariablesDirectly(): boolean;

}

