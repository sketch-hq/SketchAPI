interface NSPasteboardItemUninitialized<InitializedType = NSPasteboardItem> extends NSObjectUninitialized<NSPasteboardItem> {}
interface NSPasteboardItem extends NSObject, INSPasteboardWriting, INSPasteboardReading {
  availableTypeFromArray(types: NSArray<any> | any[]): NSPasteboardType;
  setDataProvider_forTypes(dataProvider: any, types: NSArray<any> | any[]): boolean;
  setData_forType(data: NSData, type: NSPasteboardType): boolean;
  setString_forType(string: NSString | string, type: NSPasteboardType): boolean;
  setPropertyList_forType(propertyList: any, type: NSPasteboardType): boolean;
  dataForType(type: NSPasteboardType): NSData;
  stringForType(type: NSPasteboardType): NSString;
  propertyListForType(type: NSPasteboardType): any;

  types(): NSArray<any>;
}
declare const NSPasteboardItem: {
  alloc(): NSPasteboardItemUninitialized;
  class(): NSPasteboardItem;
}

