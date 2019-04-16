interface NSWindowTabUninitialized<InitializedType = NSWindowTab> extends NSObjectUninitialized<NSWindowTab> {}
interface NSWindowTab extends NSObject {

  title(): NSString;
  setTitle(title: NSString | string): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
}
declare const NSWindowTab: {
  alloc(): NSWindowTabUninitialized;
  class(): NSWindowTab;
}

