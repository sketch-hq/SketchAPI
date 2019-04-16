interface NSTextListUninitialized<InitializedType = NSTextList> extends NSObjectUninitialized<NSTextList> {
  initWithMarkerFormat_options(format: NSTextListMarkerFormat, mask: NSUInteger): InitializedType;
}
interface NSTextList extends NSObject, INSCoding, INSCopying {
  markerForItemNumber(itemNum: NSInteger): NSString;

  markerFormat(): NSTextListMarkerFormat;
  listOptions(): NSTextListOptions;
  startingItemNumber(): NSInteger;
  setStartingItemNumber(startingItemNumber: NSInteger): void;
}
declare const NSTextList: {
  alloc(): NSTextListUninitialized;
  class(): NSTextList;
}

