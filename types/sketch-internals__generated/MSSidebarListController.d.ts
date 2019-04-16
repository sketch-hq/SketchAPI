interface MSSidebarListControllerUninitialized<InitializedType = MSSidebarListController> extends NSObjectUninitialized<MSSidebarListController> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSSidebarListController extends NSObject {
  readDragNodesFromPasteboard(pboard: NSPasteboard): NSArray<any>;
  layerForNode(node: any): MSLayer;
  layersFromNodeArray(nodes: NSArray<any> | any[]): NSArray<any>;
  canMoveNode_toParent_after(node: any, parent: any, previousNode: any): boolean;
  canCopyNode_toParent_after(node: any, parent: any, previousNode: any): boolean;
  moveNode_toParent_after(node: any, parent: any, previousNode: any): boolean;
  dragTypesForDataController(dataController: BCOutlineViewDataController): NSArray<any>;
  dataController_writeNodes_toPasteboard(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[], pboard: NSPasteboard): boolean;
  dataController_canMoveFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_canCopyFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_moveFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_copyFromPasteboard_toParent_after(dataController: BCOutlineViewDataController, pboard: NSPasteboard, parent: any, previousNode: any): boolean;
  dataController_exportNodes_toFolder(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[], folder: NSURL): NSArray<any>;

  delegate(): any;
  documentData(): MSDocumentData;
  rootObject(): any;
}
declare const MSSidebarListController: {
  alloc(): MSSidebarListControllerUninitialized;
  class(): MSSidebarListController;
}

