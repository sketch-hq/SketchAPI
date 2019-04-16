interface NSPathControlItemUninitialized<InitializedType = NSPathControlItem> extends NSObjectUninitialized<NSPathControlItem> {}
interface NSPathControlItem extends NSObject {

  title(): NSString;
  setTitle(title: NSString | string): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  URL(): NSURL;
}
declare const NSPathControlItem: {
  alloc(): NSPathControlItemUninitialized;
  class(): NSPathControlItem;
}

