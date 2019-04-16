interface NSIndexPathUninitialized<InitializedType = NSIndexPath> extends NSObjectUninitialized<NSIndexPath> {
  initWithIndexes_length(indexes: NSUInteger[], length: NSUInteger): InitializedType;
  initWithIndex(index: NSUInteger): InitializedType;
}
interface NSIndexPath extends NSObject, INSCopying, INSSecureCoding {
  indexPathByAddingIndex(index: NSUInteger): NSIndexPath;
  indexPathByRemovingLastIndex(): NSIndexPath;
  indexAtPosition(position: NSUInteger): NSUInteger;
  getIndexes_range(indexes: NSUInteger, positionRange: NSRange): void;
  compare(otherObject: NSIndexPath): NSComparisonResult;
  getIndexes(indexes: NSUInteger): void;
  indexPathWithComponent(component: MSVectorComponent): NSIndexPath;

  length(): NSUInteger;
  item(): NSInteger;
  section(): NSInteger;
  component(): MSVectorComponent;
  point(): NSUInteger;
  shape(): NSUInteger;
  handle(): MSPointType;
}
declare const NSIndexPath: {
  alloc(): NSIndexPathUninitialized;
  class(): NSIndexPath;  indexPathWithIndex(index: NSUInteger): NSIndexPath;
  indexPathWithIndexes_length(indexes: NSUInteger[], length: NSUInteger): NSIndexPath;
  indexPathForItem_inSection(item: NSInteger, section: NSInteger): NSIndexPath;
  indexPathForComponent_point_ofShape(component: MSVectorComponent, point: NSUInteger, shape: NSUInteger): NSIndexPath;
  indexPathForPoint_ofShape(point: NSUInteger, shape: NSUInteger): NSIndexPath;

}

