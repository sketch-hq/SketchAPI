interface MSPathRendererCGUninitialized<InitializedType = MSPathRendererCG> extends NSObjectUninitialized<MSPathRendererCG> {}

interface MSPathRendererCG extends NSObject, IMSPathRenderer {
  renderPath_style_layer_inRect_fallbackColor_context(path: MSPath, style: MSImmutableStyle, layer: MSImmutableStyledLayer, rect: CGRect, fillColor: CGColorRef | null, context: MSRenderingContext): void;
  renderFillsForPath_style_layer_rect_context(path: MSPath, style: MSImmutableStyle, layer: MSImmutableStyledLayer, rect: CGRect, context: MSRenderingContext): void;
  renderBordersForPath_style_applyClip_rect_context(path: MSPath, style: MSImmutableStyle, canClip: boolean, rect: CGRect, context: MSRenderingContext): void;
}

declare const MSPathRendererCG: {
  alloc(): MSPathRendererCGUninitialized;
  class(): MSPathRendererCG;
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

