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

