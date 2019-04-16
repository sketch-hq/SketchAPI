interface MSLayerFlattenerUninitialized<InitializedType = MSLayerFlattener> extends NSObjectUninitialized<MSLayerFlattener> {}

interface MSLayerFlattener extends NSObject {
  flattenLayers(layers: MSLayerArray): void;
  flattenLayer_options(layer: MSShapePathLayer, options: MSLayerFlattenOptions): void;
  imageFromLayers_immutablePage_immutableDoc(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData): NSImage;
  imageFromLayers_immutablePage_immutableDoc_includeArtboardBackground(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData, includeArtboardBackground: boolean): NSImage;
  trimmedRectFromLayers_immutablePage_immutableDoc(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData): NSRect;
  trimmedRectFromLayers_immutablePage_immutableDoc_includeArtboardBackground(layers: MSLayerArray, immutablePage: MSImmutablePage, immutableDoc: MSImmutableDocumentData, includeArtboardBackground: boolean): NSRect;
  bitmapFromRect_fromLayers_withImage(bitmapRect: NSRect, layers: MSLayerArray, image: NSImage): MSBitmapLayer;
}

declare const MSLayerFlattener: {
  alloc(): MSLayerFlattenerUninitialized;
  class(): MSLayerFlattener;
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

