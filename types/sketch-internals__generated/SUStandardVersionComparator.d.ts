interface SUStandardVersionComparatorUninitialized<InitializedType = SUStandardVersionComparator> extends NSObjectUninitialized<SUStandardVersionComparator> {
  init(): InitializedType;
}
interface SUStandardVersionComparator extends NSObject, ISUVersionComparison {
  compareVersion_toVersion(versionA: NSString | string, versionB: NSString | string): NSComparisonResult;
}
declare const SUStandardVersionComparator: {
  alloc(): SUStandardVersionComparatorUninitialized;
  class(): SUStandardVersionComparator;  defaultComparator(): SUStandardVersionComparator;

}

