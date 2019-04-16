interface NSColorListUninitialized<InitializedType = NSColorList> extends NSObjectUninitialized<NSColorList> {
  initWithName(name: NSColorListName): InitializedType;
  initWithName_fromFile(name: NSColorListName, path: NSString | string | null): InitializedType;
}
interface NSColorList extends NSObject, INSSecureCoding {
  setColor_forKey(color: NSColor, key: NSColorName): void;
  insertColor_key_atIndex(color: NSColor, key: NSColorName, loc: NSUInteger): void;
  removeColorWithKey(key: NSColorName): void;
  colorWithKey(key: NSColorName): NSColor;
  writeToURL_error(url: NSURL | null, errPtr: NSError): boolean;
  writeToFile(path: NSString | string | null): boolean;
  removeFile(): void;

  name(): NSColorListName;
  allKeys(): NSArray<any>;
  editable(): boolean;
}
declare const NSColorList: {
  alloc(): NSColorListUninitialized;
  class(): NSColorList;  colorListNamed(name: NSColorListName): NSColorList;

  availableColorLists(): NSArray<any>;

}

