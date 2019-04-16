interface NSCollectionViewGridLayoutUninitialized<InitializedType = NSCollectionViewGridLayout> extends NSCollectionViewLayoutUninitialized<NSCollectionViewGridLayout> {}

interface NSCollectionViewGridLayout extends NSCollectionViewLayout {

  margins(): NSEdgeInsets;
  setMargins(margins: NSEdgeInsets): void;
  minimumInteritemSpacing(): CGFloat;
  setMinimumInteritemSpacing(minimumInteritemSpacing: CGFloat): void;
  minimumLineSpacing(): CGFloat;
  setMinimumLineSpacing(minimumLineSpacing: CGFloat): void;
  maximumNumberOfRows(): NSUInteger;
  setMaximumNumberOfRows(maximumNumberOfRows: NSUInteger): void;
  maximumNumberOfColumns(): NSUInteger;
  setMaximumNumberOfColumns(maximumNumberOfColumns: NSUInteger): void;
  minimumItemSize(): NSSize;
  setMinimumItemSize(minimumItemSize: NSSize): void;
  maximumItemSize(): NSSize;
  setMaximumItemSize(maximumItemSize: NSSize): void;
  backgroundColors(): NSArray<any>;
  setBackgroundColors(backgroundColors: NSArray<any> | any[]): void;
}

declare const NSCollectionViewGridLayout: {
  alloc(): NSCollectionViewGridLayoutUninitialized;
  class(): NSCollectionViewGridLayout;
  layoutAttributesClass(): any;
  invalidationContextClass(): any;

}

