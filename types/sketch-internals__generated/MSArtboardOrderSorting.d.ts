interface MSArtboardOrderSortingUninitialized<InitializedType = MSArtboardOrderSorting> extends NSObjectUninitialized<MSArtboardOrderSorting> {}
interface MSArtboardOrderSorting extends NSObject {
}
declare const MSArtboardOrderSorting: {
  alloc(): MSArtboardOrderSortingUninitialized;
  class(): MSArtboardOrderSorting;  sortArtboards_inOrder(artboards: NSArray<any> | any[], order: MSLayerOrderSortingOptions): NSArray<any>;
  sortArtboardsInDefaultOrder(artboards: NSArray<any> | any[]): NSArray<any>;

}

