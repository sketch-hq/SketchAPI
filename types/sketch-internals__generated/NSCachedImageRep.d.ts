interface NSCachedImageRepUninitialized<InitializedType = NSCachedImageRep> extends NSImageRepUninitialized<NSCachedImageRep> {
  initWithWindow_rect(win: NSWindow, rect: NSRect): InitializedType;
  initWithSize_depth_separate_alpha(size: NSSize, depth: NSWindowDepth, flag: boolean, alpha: boolean): InitializedType;
}
interface NSCachedImageRep extends NSImageRep {
  window(): NSWindow;
  rect(): NSRect;
}
declare const NSCachedImageRep: {
  alloc(): NSCachedImageRepUninitialized;
  class(): NSCachedImageRep;
}

