interface NSTreeControllerUninitialized<InitializedType = NSTreeController> extends NSObjectControllerUninitialized<NSTreeController> {}
interface NSTreeController extends NSObjectController {
  rearrangeObjects(): void;
  add(sender: any | null): IBAction;
  remove(sender: any | null): IBAction;
  addChild(sender: any | null): IBAction;
  insert(sender: any | null): IBAction;
  insertChild(sender: any | null): IBAction;
  insertObject_atArrangedObjectIndexPath(object: any | null, indexPath: NSIndexPath): void;
  insertObjects_atArrangedObjectIndexPaths(objects: NSArray<any> | any[], indexPaths: NSArray<any> | any[]): void;
  removeObjectAtArrangedObjectIndexPath(indexPath: NSIndexPath): void;
  removeObjectsAtArrangedObjectIndexPaths(indexPaths: NSArray<any> | any[]): void;
  setSelectionIndexPaths(indexPaths: NSArray<any> | any[]): boolean;
  setSelectionIndexPath(indexPath: NSIndexPath | null): boolean;
  addSelectionIndexPaths(indexPaths: NSArray<any> | any[]): boolean;
  removeSelectionIndexPaths(indexPaths: NSArray<any> | any[]): boolean;
  moveNode_toIndexPath(node: NSTreeNode, indexPath: NSIndexPath): void;
  moveNodes_toIndexPath(nodes: NSArray<any> | any[], startingIndexPath: NSIndexPath): void;
  childrenKeyPathForNode(node: NSTreeNode): NSString;
  countKeyPathForNode(node: NSTreeNode): NSString;
  leafKeyPathForNode(node: NSTreeNode): NSString;

  arrangedObjects(): NSTreeNode;
  childrenKeyPath(): NSString;
  setChildrenKeyPath(childrenKeyPath: NSString | string): void;
  countKeyPath(): NSString;
  setCountKeyPath(countKeyPath: NSString | string): void;
  leafKeyPath(): NSString;
  setLeafKeyPath(leafKeyPath: NSString | string): void;
  sortDescriptors(): NSArray<any>;
  setSortDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  content(): any;
  setContent(content: any): void;
  canInsert(): boolean;
  canInsertChild(): boolean;
  canAddChild(): boolean;
  avoidsEmptySelection(): boolean;
  setAvoidsEmptySelection(avoidsEmptySelection: boolean): void;
  preservesSelection(): boolean;
  setPreservesSelection(preservesSelection: boolean): void;
  selectsInsertedObjects(): boolean;
  setSelectsInsertedObjects(selectsInsertedObjects: boolean): void;
  alwaysUsesMultipleValuesMarker(): boolean;
  setAlwaysUsesMultipleValuesMarker(alwaysUsesMultipleValuesMarker: boolean): void;
  selectedObjects(): NSArray<any>;
  selectionIndexPaths(): NSArray<any>;
  selectionIndexPath(): NSIndexPath;
  selectedNodes(): NSArray<any>;
}
declare const NSTreeController: {
  alloc(): NSTreeControllerUninitialized;
  class(): NSTreeController;
}

