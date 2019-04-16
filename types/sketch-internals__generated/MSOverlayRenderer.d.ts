interface MSOverlayRendererUninitialized<InitializedType = MSOverlayRenderer> extends NSObjectUninitialized<MSOverlayRenderer> {}

interface MSOverlayRenderer extends NSObject {
  trackMouseWithLocation(location: CGPoint): void;
  updateCursorWithLocation_modifierFlags(location: CGPoint, modifierFlags: NSEventModifierFlags): boolean;
  drawRect_context(dirtyRect: NSRect, context: MSRenderingContext): void;
  setNeedsDisplayInRect(rect: NSRect): void;

  hidden(): boolean;
  setHidden(hidden: boolean): void;
  hostView(): any;
  setHostView(hostView: any): void;
}

declare const MSOverlayRenderer: {
  alloc(): MSOverlayRendererUninitialized;
  class(): MSOverlayRenderer;
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

