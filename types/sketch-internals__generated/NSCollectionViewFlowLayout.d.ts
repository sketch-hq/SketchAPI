interface NSCollectionViewFlowLayoutUninitialized<InitializedType = NSCollectionViewFlowLayout> extends NSCollectionViewLayoutUninitialized<NSCollectionViewFlowLayout> {}
interface NSCollectionViewFlowLayout extends NSCollectionViewLayout {
  sectionAtIndexIsCollapsed(sectionIndex: NSUInteger): boolean;
  collapseSectionAtIndex(sectionIndex: NSUInteger): void;
  expandSectionAtIndex(sectionIndex: NSUInteger): void;

  minimumLineSpacing(): CGFloat;
  setMinimumLineSpacing(minimumLineSpacing: CGFloat): void;
  minimumInteritemSpacing(): CGFloat;
  setMinimumInteritemSpacing(minimumInteritemSpacing: CGFloat): void;
  itemSize(): NSSize;
  setItemSize(itemSize: NSSize): void;
  estimatedItemSize(): NSSize;
  setEstimatedItemSize(estimatedItemSize: NSSize): void;
  scrollDirection(): NSCollectionViewScrollDirection;
  setScrollDirection(scrollDirection: NSCollectionViewScrollDirection): void;
  headerReferenceSize(): NSSize;
  setHeaderReferenceSize(headerReferenceSize: NSSize): void;
  footerReferenceSize(): NSSize;
  setFooterReferenceSize(footerReferenceSize: NSSize): void;
  sectionInset(): NSEdgeInsets;
  setSectionInset(sectionInset: NSEdgeInsets): void;
  sectionHeadersPinToVisibleBounds(): boolean;
  setSectionHeadersPinToVisibleBounds(sectionHeadersPinToVisibleBounds: boolean): void;
  sectionFootersPinToVisibleBounds(): boolean;
  setSectionFootersPinToVisibleBounds(sectionFootersPinToVisibleBounds: boolean): void;
}
declare const NSCollectionViewFlowLayout: {
  alloc(): NSCollectionViewFlowLayoutUninitialized;
  class(): NSCollectionViewFlowLayout;
}

