interface MSFlowRendererUninitialized<InitializedType = MSFlowRenderer> extends NSObjectUninitialized<MSFlowRenderer> {}

interface MSFlowRenderer extends NSObject {
  renderFlowItems_selectedLayerIDs_backingScaleFactor_translation_zoomLevel_renderer_settings(flowItems: NSSet<any>, selectedLayerIDs: NSSet<any>, backingScaleFactor: CGFloat, p: CGPoint, zoomLevel: CGFloat, renderer: any, settings: MSRenderingDriverSettings): void;
  renderFlowsItems_selectedLayerIDs_context_zoomLevel_settings(flowItems: NSSet<any>, selectedLayerIDs: NSSet<any>, context: CGContextRef, zoomLevel: CGFloat, settings: MSRenderingDriverSettings): void;
}

declare const MSFlowRenderer: {
  alloc(): MSFlowRendererUninitialized;
  class(): MSFlowRenderer;
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

