interface MSPageListControllerUninitialized<InitializedType = MSPageListController> extends MSSidebarListControllerUninitialized<MSPageListController> {}

interface MSPageListController extends MSSidebarListController, IBCOutlineViewDataControllerDataSource, IBCOutlineViewDataControllerDelegate {
  dataController_childrenOfNode(dataController: BCOutlineViewDataController | null, node: any | null): NSArray<any>;
  rootObject(): any;
  dataController_isNodeSelected(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_isNodeHiddenOnCanvas(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_isAncestorOfNodeHiddenOnCanvas(dataController: BCOutlineViewDataController, descendantNode: any): boolean;
  dataController_isNodeLockedOnCanvas(dataController: BCOutlineViewDataController, node: any): boolean;
  multipleNodesSelectedForDataController(dataController: BCOutlineViewDataController): boolean;
  dataController_nodeHasSharedStyle(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_changeSelectionTo(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[]): void;
  dataController_isNodeExpanded(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_isNodeExpandable(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_isNodeHighlighted(dataController: BCOutlineViewDataController, node: any): boolean;
  dataController_updateNode_expandedState(dataController: BCOutlineViewDataController, node: any, expanded: BCOutlineViewNodeExpansionState): void;
  dataController_exportNodes_toFolder(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[], folder: NSURL): NSArray<any>;
  dragTypesForDataController(dataController: BCOutlineViewDataController): NSArray<any>;
  dataController_writeNodes_toPasteboard(dataController: BCOutlineViewDataController, items: NSArray<any> | any[], pboard: NSPasteboard): boolean;
  dataController_canMoveFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_canCopyFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_moveFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_copyFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_handleBadgePressedOnNode_withAltState(dataController: BCOutlineViewDataController, node: any, alt: boolean): void;
  dataController_refreshPreviewsOnNode(dataController: BCOutlineViewDataController, node: any): void;
  dataController_menuItemsForSelectedObjects(dataController: BCOutlineViewDataController, selection: NSArray<any> | any[]): NSArray<any>;
  dataController_hoverNodeDidChangeTo(dataController: BCOutlineViewDataController, node: any): void;

  defaultFirstResponder(): NSView;
}

declare const MSPageListController: {
  alloc(): MSPageListControllerUninitialized;
  class(): MSPageListController;
}

