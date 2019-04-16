interface NSStatusBarUninitialized<InitializedType = NSStatusBar> extends NSObjectUninitialized<NSStatusBar> {}
interface NSStatusBar extends NSObject {
  statusItemWithLength(length: CGFloat): NSStatusItem;
  removeStatusItem(item: NSStatusItem): void;

  vertical(): boolean;
  thickness(): CGFloat;
}
declare const NSStatusBar: {
  alloc(): NSStatusBarUninitialized;
  class(): NSStatusBar;
  systemStatusBar(): NSStatusBar;

}

