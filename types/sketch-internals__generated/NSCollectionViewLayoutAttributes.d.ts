interface NSCollectionViewLayoutAttributesUninitialized<InitializedType = NSCollectionViewLayoutAttributes> extends NSObjectUninitialized<NSCollectionViewLayoutAttributes> {}
interface NSCollectionViewLayoutAttributes extends NSObject, INSCopying {

  frame(): NSRect;
  setFrame(frame: NSRect): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  alpha(): CGFloat;
  setAlpha(alpha: CGFloat): void;
  zIndex(): NSInteger;
  setZIndex(zIndex: NSInteger): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  indexPath(): NSIndexPath;
  setIndexPath(indexPath: NSIndexPath): void;
  representedElementCategory(): NSCollectionElementCategory;
  representedElementKind(): NSString;
}
declare const NSCollectionViewLayoutAttributes: {
  alloc(): NSCollectionViewLayoutAttributesUninitialized;
  class(): NSCollectionViewLayoutAttributes;  layoutAttributesForItemWithIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForInterItemGapBeforeIndexPath(indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForSupplementaryViewOfKind_withIndexPath(elementKind: NSCollectionViewSupplementaryElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;
  layoutAttributesForDecorationViewOfKind_withIndexPath(decorationViewKind: NSCollectionViewDecorationElementKind, indexPath: NSIndexPath): NSCollectionViewLayoutAttributes;

}

