interface MSOverrideMappingUninitialized<InitializedType = MSOverrideMapping> extends NSObjectUninitialized<MSOverrideMapping> {}
interface MSOverrideMapping extends NSObject {
  removeOverridePoint(overridePoint: MSOverridePoint): void;

  score(): NSInteger;
  overridePoint(): MSOverridePoint;
  oldOverridePoint(): MSOverridePoint;
}
declare const MSOverrideMapping: {
  alloc(): MSOverrideMappingUninitialized;
  class(): MSOverrideMapping;  overrideMappingFor_withOldOverrides(overridePoint: MSOverridePoint, oldOverridePoints: NSArray<any> | any[]): MSOverrideMapping;
  consolidateAndFindNextMappingFrom(mappings: NSMutableArray<any> | any[]): MSOverrideMapping;

}

