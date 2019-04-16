interface LLTestBaseControllerUninitialized<InitializedType = LLTestBaseController> extends NSObjectUninitialized<LLTestBaseController> {}

interface LLTestBaseController extends NSObject, IBCOutlineViewDataControllerDataSource, IBCOutlineViewDataControllerDelegate {
  dataController_removeNodes(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[]): void;
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

  root(): any;
  setRoot(root: any): void;
  defaultFirstResponder(): NSView;
}

declare const LLTestBaseController: {
  alloc(): LLTestBaseControllerUninitialized;
  class(): LLTestBaseController;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

