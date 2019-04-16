interface BCFilterInfoUninitialized<InitializedType = BCFilterInfo> extends NSObjectUninitialized<BCFilterInfo> {}
interface BCFilterInfo extends NSObject {
  filterTypeApplies(filterType: BCOutlineViewFilterTypeMask): boolean;
  shouldIncludeNode(node: any): boolean;
  resetCacheGeneration(): void;

  filterString(): NSString;
  setFilterString(filterString: NSString | string): void;
  filterTypeMask(): BCOutlineViewFilterTypeMask;
  setFilterTypeMask(filterTypeMask: BCOutlineViewFilterTypeMask): void;
  cacheGeneration(): NSObject;
  isActive(): boolean;
}
declare const BCFilterInfo: {
  alloc(): BCFilterInfoUninitialized;
  class(): BCFilterInfo;
}

