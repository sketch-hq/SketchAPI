interface NSObjectControllerUninitialized<InitializedType = NSObjectController> extends NSControllerUninitialized<NSObjectController> {
  initWithContent(content: any | null): InitializedType;
}
interface NSObjectController extends NSController {
  prepareContent(): void;
  newObject(): any;
  addObject(object: any): void;
  removeObject(object: any): void;
  add(sender: any | null): IBAction;
  remove(sender: any | null): IBAction;
  validateUserInterfaceItem(item: any): boolean;
  fetchWithRequest_merge_error(fetchRequest: NSFetchRequest | null, merge: boolean, error: NSError): boolean;
  fetch(sender: any | null): IBAction;
  defaultFetchRequest(): NSFetchRequest;

  content(): any;
  setContent(content: any): void;
  selection(): any;
  selectedObjects(): NSArray<any>;
  automaticallyPreparesContent(): boolean;
  setAutomaticallyPreparesContent(automaticallyPreparesContent: boolean): void;
  objectClass(): any;
  setObjectClass(objectClass: any): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  canAdd(): boolean;
  canRemove(): boolean;
  managedObjectContext(): NSManagedObjectContext;
  setManagedObjectContext(managedObjectContext: NSManagedObjectContext): void;
  entityName(): NSString;
  setEntityName(entityName: NSString | string): void;
  fetchPredicate(): NSPredicate;
  setFetchPredicate(fetchPredicate: NSPredicate): void;
  usesLazyFetching(): boolean;
  setUsesLazyFetching(usesLazyFetching: boolean): void;
}
declare const NSObjectController: {
  alloc(): NSObjectControllerUninitialized;
  class(): NSObjectController;
}

