interface BCOutlineViewDataControllerUninitialized<InitializedType = BCOutlineViewDataController> extends NSObjectUninitialized<BCOutlineViewDataController> {
  initWithDataSource_delegate(dataSource: NSObject, delegate: NSObject): InitializedType;
}
interface BCOutlineViewDataController extends NSObject {
  childrenOfNode(node: any): NSArray<any>;
  numberOfChildrenOfNode(node: any): NSUInteger;
  childOfNode_atIndex(node: any, index: NSInteger): any;
  willReloadNodes(): void;
  shouldExpandNode(node: any): boolean;
  writeNodes_toPasteboard(nodes: NSArray<any> | any[], pasteboard: NSPasteboard): boolean;
  handleDragWithPasteboard_forProposedItem_proposedChildIndex_copying_validationOnly(pasteboard: NSPasteboard, item: any, index: NSInteger, copying: boolean, validating: boolean): boolean;
  changeSelectionTo(selection: NSArray<any> | any[]): void;
  isNodeSelected(node: any): boolean;
  isNodeHiddenOnCanvas(node: any): boolean;
  isAncestorOfNodeHiddenOnCanvas(node: any): boolean;
  isNodeLockedOnCanvas(node: any): boolean;
  multipleNodesSelected(): boolean;
  isNodeExpanded(node: any): boolean;
  isNodeExpandable(node: any): boolean;
  updateNode_expandedState(node: any, expanded: BCOutlineViewNodeExpansionState): void;
  menuItemsForSelectedObjects(selection: NSArray<any> | any[]): NSArray<any>;
  hoverNodeDidChangeTo(node: any): void;
  isNodeHighlighted(node: any): boolean;
  handleBadgePressedOnNode_withAltState(node: any, alt: boolean): void;
  refreshPreviewsOnNode(node: any): void;
  namesOfPromisedFilesDroppedAtDestination_forDraggedItems(dropDestination: NSURL, items: NSArray<any> | any[]): NSArray<any>;

  delegate(): NSObject;
  dataSource(): NSObject;
  filter(): BCFilterInfo;
  setFilter(filter: BCFilterInfo): void;
  rootObject(): any;
  dragTypes(): NSArray<any>;
  canProvideContextMenuItems(): boolean;
}
declare const BCOutlineViewDataController: {
  alloc(): BCOutlineViewDataControllerUninitialized;
  class(): BCOutlineViewDataController;
}

