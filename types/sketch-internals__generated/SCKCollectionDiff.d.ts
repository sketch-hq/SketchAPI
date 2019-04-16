interface SCKCollectionDiffUninitialized<InitializedType = SCKCollectionDiff> extends NSObjectUninitialized<SCKCollectionDiff> {
  initWithObject_comparedTo(object: NSArray<any> | any[], otherObject: NSArray<any> | any[]): InitializedType;
  initWithCollectionDiffSet(diffSet: NSSet<any>): InitializedType;
}
interface SCKCollectionDiff extends NSObject, ISCKDiff {

  object(): NSArray<any>;
  comparedObject(): NSArray<any>;
  insertions(): NSSet<any>;
  updateDiffs(): NSSet<any>;
  deletions(): NSSet<any>;
}
declare const SCKCollectionDiff: {
  alloc(): SCKCollectionDiffUninitialized;
  class(): SCKCollectionDiff;
}

