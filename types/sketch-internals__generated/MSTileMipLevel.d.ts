interface MSTileMipLevelUninitialized<InitializedType = MSTileMipLevel> extends NSObjectUninitialized<MSTileMipLevel> {
  initWithScaleRangeMax(max: CGFloat): InitializedType;
}

interface MSTileMipLevel extends NSObject {
  enqueueRenderableTilesForVisibleRect(visibleRect: NSRect): NSArray<any>;
  countExistingTilesForVisibleRect(visibleRect: NSRect): NSUInteger;
  findWritableTileAt(point: BCIntPoint): MSTile;
  addTile(tile: MSTile): void;
  removeAllTiles(): void;
  removeAllTilesAndClearDirtyRegion(): void;
  removeAllTilesAndResetDirtyRegionToRect(rect: BCIntRect): void;
  isCurrentColorSpaceEqualTo(colorSpace: CGColorSpaceRef): boolean;
  uniteDirtyRect(rect: NSRect): void;
  subtractDirtyRect(rect: BCIntRect): void;

  scaleRangeMax(): CGFloat;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  currentColorSpace(): CGColorSpaceRef;
  setCurrentColorSpace(currentColorSpace: CGColorSpaceRef): void;
  clearBeforeUpload(): boolean;
  setClearBeforeUpload(clearBeforeUpload: boolean): void;
  dirtyRegion(): MSRegion;
  tileCount(): NSUInteger;
}

declare const MSTileMipLevel: {
  alloc(): MSTileMipLevelUninitialized;
  class(): MSTileMipLevel;
  tileMipLevelWithScaleRangeMax(rangeMax: CGFloat): MSTileMipLevel;
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

