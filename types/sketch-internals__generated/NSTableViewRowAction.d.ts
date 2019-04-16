interface NSTableViewRowActionUninitialized<InitializedType = NSTableViewRowAction> extends NSObjectUninitialized<NSTableViewRowAction> {}
interface NSTableViewRowAction extends NSObject, INSCopying {

  style(): NSTableViewRowActionStyle;
  title(): NSString;
  setTitle(title: NSString | string): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  image(): NSImage;
  setImage(image: NSImage): void;
}
declare const NSTableViewRowAction: {
  alloc(): NSTableViewRowActionUninitialized;
  class(): NSTableViewRowAction;  rowActionWithStyle_title_handler(style: NSTableViewRowActionStyle, title: NSString | string, handler: Block): NSTableViewRowAction;

}

