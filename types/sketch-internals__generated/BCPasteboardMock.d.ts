interface BCPasteboardMockUninitialized<InitializedType = BCPasteboardMock> extends NSObjectUninitialized<BCPasteboardMock> {}
interface BCPasteboardMock extends NSObject {
  declareTypes_owner(types: NSArray<any> | any[], owner: any): void;
  addTypes_owner(types: NSArray<any> | any[], owner: any): void;
  setData_forType(data: NSData, dataType: NSString | string): void;
  dataForType(type: NSString | string): NSData;
  setString_forType(string: NSString | string, dataType: NSString | string): boolean;
  stringForType(dataType: NSString | string): NSString;
  setPropertyList_forType(plist: any, dataType: NSString | string): boolean;
  propertyListForType(dataType: NSString | string): any;
  availableTypeFromArray(types: NSArray<any> | any[]): NSString;
  types(): NSArray<any>;
  writeObjects(objects: NSArray<any> | any[]): boolean;
  clearContents(): void;

  name(): NSString;
  changeCount(): NSInteger;
}
declare const BCPasteboardMock: {
  alloc(): BCPasteboardMockUninitialized;
  class(): BCPasteboardMock;  generalPasteboard(): NSPasteboard;
  pasteboardWithName(name: NSString | string): NSPasteboard;

}

