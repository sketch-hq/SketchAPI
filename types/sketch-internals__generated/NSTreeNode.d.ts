interface NSTreeNodeUninitialized<InitializedType = NSTreeNode> extends NSObjectUninitialized<NSTreeNode> {
  initWithRepresentedObject(modelObject: any | null): InitializedType;
}
interface NSTreeNode extends NSObject {
  descendantNodeAtIndexPath(indexPath: NSIndexPath): NSTreeNode;
  sortWithSortDescriptors_recursively(sortDescriptors: NSArray<any> | any[], recursively: boolean): void;

  representedObject(): any;
  indexPath(): NSIndexPath;
  leaf(): boolean;
  childNodes(): NSArray<any>;
  mutableChildNodes(): NSMutableArray<any>;
  parentNode(): NSTreeNode;
}
declare const NSTreeNode: {
  alloc(): NSTreeNodeUninitialized;
  class(): NSTreeNode;  treeNodeWithRepresentedObject(modelObject: any | null): NSTreeNode;

}

