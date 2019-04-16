interface NSTrackingAreaUninitialized<InitializedType = NSTrackingArea> extends NSObjectUninitialized<NSTrackingArea> {
  initWithRect_options_owner_userInfo(rect: NSRect, options: NSTrackingAreaOptions, owner: any | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSTrackingArea extends NSObject, INSCopying, INSCoding {

  rect(): NSRect;
  options(): NSTrackingAreaOptions;
  owner(): any;
  userInfo(): NSDictionary<any, any>;
}
declare const NSTrackingArea: {
  alloc(): NSTrackingAreaUninitialized;
  class(): NSTrackingArea;  mouseEnterExitTrackingArea(owner: any): NSTrackingArea;
  trackingAreaWithOptions_owner(options: NSTrackingAreaOptions, owner: any): NSTrackingArea;

}

