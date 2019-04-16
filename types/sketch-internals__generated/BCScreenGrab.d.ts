interface BCScreenGrabUninitialized<InitializedType = BCScreenGrab> extends NSObjectUninitialized<BCScreenGrab> {}
interface BCScreenGrab extends NSObject {
  bitmapImageRepCroppingToRect(r: NSRect): NSBitmapImageRep;

  displayID(): CGDirectDisplayID;
  image(): NSImage;
  bitmapRep(): NSBitmapImageRep;
  imageOrigin(): NSPoint;
  isRetinaScreen(): boolean;
  colorSpace(): NSColorSpace;
  screenFrame(): NSRect;
}
declare const BCScreenGrab: {
  alloc(): BCScreenGrabUninitialized;
  class(): BCScreenGrab;  screenGrabForDisplay_belowWindowWithID(displayID: CGDirectDisplayID, windowID: CGWindowID): BCScreenGrab;
  screenGrabWithBitmapImageRep_originOnScreen_colorSpace_displayID(bitmapRep: NSBitmapImageRep, screenOrigin: NSPoint, colorSpace: NSColorSpace, displayID: CGDirectDisplayID): BCScreenGrab;

}

