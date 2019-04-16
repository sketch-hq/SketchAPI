interface MSUITestAutomatorUninitialized<InitializedType = MSUITestAutomator> extends NSObjectUninitialized<MSUITestAutomator> {}

interface MSUITestAutomator extends NSObject {
  queuePlaybackEvent(event: dispatch_block_t): void;
  playback(): void;
  pausePlaybackFor(pause: NSTimeInterval): void;
  singleClickAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  doubleClickAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  startDragAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  dragToPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  endDragAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  sendKeyPressEvent_modifiers(characters: NSString | string, flags: NSEventModifierFlags): void;
  sendDeleteKeyPressed(flags: NSEventModifierFlags): void;
  sendRightArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendLeftArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendUpArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendDownArrowKeyModifiers(flags: NSEventModifierFlags): void;
}

declare const MSUITestAutomator: {
  alloc(): MSUITestAutomatorUninitialized;
  class(): MSUITestAutomator;
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

