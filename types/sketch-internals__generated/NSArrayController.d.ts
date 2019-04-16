interface NSArrayControllerUninitialized<InitializedType = NSArrayController> extends NSObjectControllerUninitialized<NSArrayController> {}
interface NSArrayController extends NSObjectController {
  rearrangeObjects(): void;
  didChangeArrangementCriteria(): void;
  arrangeObjects(objects: NSArray<any> | any[]): NSArray<any>;
  setSelectionIndexes(indexes: NSIndexSet): boolean;
  setSelectionIndex(index: NSUInteger): boolean;
  addSelectionIndexes(indexes: NSIndexSet): boolean;
  removeSelectionIndexes(indexes: NSIndexSet): boolean;
  setSelectedObjects(objects: NSArray<any> | any[]): boolean;
  addSelectedObjects(objects: NSArray<any> | any[]): boolean;
  removeSelectedObjects(objects: NSArray<any> | any[]): boolean;
  add(sender: any | null): IBAction;
  remove(sender: any | null): IBAction;
  insert(sender: any | null): IBAction;
  selectNext(sender: any | null): IBAction;
  selectPrevious(sender: any | null): IBAction;
  addObject(object: any): void;
  addObjects(objects: NSArray<any> | any[]): void;
  insertObject_atArrangedObjectIndex(object: any, index: NSUInteger): void;
  insertObjects_atArrangedObjectIndexes(objects: NSArray<any> | any[], indexes: NSIndexSet): void;
  removeObjectAtArrangedObjectIndex(index: NSUInteger): void;
  removeObjectsAtArrangedObjectIndexes(indexes: NSIndexSet): void;
  removeObject(object: any): void;
  removeObjects(objects: NSArray<any> | any[]): void;

  automaticallyRearrangesObjects(): boolean;
  setAutomaticallyRearrangesObjects(automaticallyRearrangesObjects: boolean): void;
  automaticRearrangementKeyPaths(): NSArray<any>;
  sortDescriptors(): NSArray<any>;
  setSortDescriptors(sortDescriptors: NSArray<any> | any[]): void;
  filterPredicate(): NSPredicate;
  setFilterPredicate(filterPredicate: NSPredicate): void;
  clearsFilterPredicateOnInsertion(): boolean;
  setClearsFilterPredicateOnInsertion(clearsFilterPredicateOnInsertion: boolean): void;
  arrangedObjects(): any;
  avoidsEmptySelection(): boolean;
  setAvoidsEmptySelection(avoidsEmptySelection: boolean): void;
  preservesSelection(): boolean;
  setPreservesSelection(preservesSelection: boolean): void;
  selectsInsertedObjects(): boolean;
  setSelectsInsertedObjects(selectsInsertedObjects: boolean): void;
  alwaysUsesMultipleValuesMarker(): boolean;
  setAlwaysUsesMultipleValuesMarker(alwaysUsesMultipleValuesMarker: boolean): void;
  selectionIndexes(): NSIndexSet;
  selectionIndex(): NSUInteger;
  selectedObjects(): NSArray<any>;
  canInsert(): boolean;
  canSelectNext(): boolean;
  canSelectPrevious(): boolean;
}
declare const NSArrayController: {
  alloc(): NSArrayControllerUninitialized;
  class(): NSArrayController;
}

