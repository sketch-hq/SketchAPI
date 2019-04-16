interface MSShadowRendererCGUninitialized<InitializedType = MSShadowRendererCG> extends NSObjectUninitialized<MSShadowRendererCG> {}

interface MSShadowRendererCG extends NSObject, IMSShadowRenderer {
  renderShadow_path_cacheObject_windingRule_options_type_strokeType_fillShouldClip_lineWidth_context(shadow: MSImmutableStyleShadow, path: MSPath, cacheObject: any, windingRule: NSWindingRule, options: MSImmutableStyleBorderOptions, shadowType: MSShadowType, strokeType: MSShadowBorderType, fillShouldClip: boolean, width: CGFloat, context: MSRenderingContext): void;
  renderShadow_rect_context_block(shadow: MSImmutableStyleShadow, rect: CGRect, context: MSRenderingContext, block: BCVoidBlock): void;
  renderInnerShadow_path_windingRule_context_cacheObject(shadow: MSImmutableStyleInnerShadow, path: MSPath, windingRule: NSWindingRule, context: MSRenderingContext, cacheObject: any): void;
}

declare const MSShadowRendererCG: {
  alloc(): MSShadowRendererCGUninitialized;
  class(): MSShadowRendererCG;
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

