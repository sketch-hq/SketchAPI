interface NSScreenUninitialized<InitializedType = NSScreen> extends NSObjectUninitialized<NSScreen> {}
interface NSScreen extends NSObject {
  canRepresentDisplayGamut(displayGamut: NSDisplayGamut): boolean;
  convertRectToBacking(rect: NSRect): NSRect;
  convertRectFromBacking(rect: NSRect): NSRect;
  backingAlignedRect_options(rect: NSRect, options: NSAlignmentOptions): NSRect;
  userSpaceScaleFactor(): CGFloat;
  isOnRetinaScreen(): boolean;

  depth(): NSWindowDepth;
  frame(): NSRect;
  visibleFrame(): NSRect;
  deviceDescription(): NSDictionary<any, any>;
  colorSpace(): NSColorSpace;
  supportedWindowDepths(): NSWindowDepth;
  backingScaleFactor(): CGFloat;
  maximumExtendedDynamicRangeColorComponentValue(): CGFloat;
}
declare const NSScreen: {
  alloc(): NSScreenUninitialized;
  class(): NSScreen;
  screens(): NSArray<any>;
  mainScreen(): NSScreen;
  deepestScreen(): NSScreen;
  screensHaveSeparateSpaces(): boolean;
  highestBackingScale_bc(): CGFloat;

}

