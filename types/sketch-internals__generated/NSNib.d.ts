interface NSNibUninitialized<InitializedType = NSNib> extends NSObjectUninitialized<NSNib> {
  initWithNibNamed_bundle(nibName: NSNibName, bundle: NSBundle | null): InitializedType;
  initWithNibData_bundle(nibData: NSData, bundle: NSBundle | null): InitializedType;
  initWithContentsOfURL(nibFileURL: NSURL): InitializedType;
}
interface NSNib extends NSObject, INSCoding {
  instantiateWithOwner_topLevelObjects(owner: any | null, topLevelObjects: NSArray<any> | any[]): boolean;
  instantiateNibWithExternalNameTable(externalNameTable: NSDictionary<any, any> | {[key: string]: any}): boolean;
  instantiateNibWithOwner_topLevelObjects(owner: any, topLevelObjects: NSArray<any> | any[]): boolean;
}
declare const NSNib: {
  alloc(): NSNibUninitialized;
  class(): NSNib;
}

