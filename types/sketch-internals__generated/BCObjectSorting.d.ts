interface BCObjectSortingUninitialized<InitializedType = BCObjectSorting> extends NSObjectUninitialized<BCObjectSorting> {}
interface BCObjectSorting extends NSObject {
}
declare const BCObjectSorting: {
  alloc(): BCObjectSortingUninitialized;
  class(): BCObjectSorting;  sortObjectsAlphabetically(sortableObjects: NSArray<any> | any[]): NSArray<any>;
  sortObjectsWithNesting(sortableObjects: NSArray<any> | any[]): NSArray<any>;
  sortObjectsWithCompressedNesting(sortableObjects: NSArray<any> | any[]): NSArray<any>;

}

