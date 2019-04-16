interface NSTextTabUninitialized<InitializedType = NSTextTab> extends NSObjectUninitialized<NSTextTab> {
  initWithTextAlignment_location_options(alignment: NSTextAlignment, loc: CGFloat, options: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithType_location(type: NSTextTabType, loc: CGFloat): InitializedType;
}
interface NSTextTab extends NSObject, INSCopying, INSCoding, INSSecureCoding {

  alignment(): NSTextAlignment;
  location(): CGFloat;
  options(): NSDictionary<any, any>;
  tabStopType(): NSTextTabType;
}
declare const NSTextTab: {
  alloc(): NSTextTabUninitialized;
  class(): NSTextTab;  columnTerminatorsForLocale(aLocale: NSLocale | null): NSCharacterSet;

}

