interface CARendererUninitialized<InitializedType = CARenderer> extends NSObjectUninitialized<CARenderer> {}

interface CARenderer extends NSObject {
  beginFrameAtTime_timeStamp(t: CFTimeInterval, ts: CVTimeStamp | null): void;
  updateBounds(): CGRect;
  addUpdateRect(r: CGRect): void;
  render(): void;
  nextFrameTime(): CFTimeInterval;
  endFrame(): void;
  setDestination(tex: any): void;

  layer(): CALayer;
  setLayer(layer: CALayer): void;
  bounds(): CGRect;
  setBounds(bounds: CGRect): void;
}

declare const CARenderer: {
  alloc(): CARendererUninitialized;
  class(): CARenderer;
  rendererWithMTLTexture_options(tex: any, dict: NSDictionary<any, any> | {[key: string]: any} | null): CARenderer;
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

