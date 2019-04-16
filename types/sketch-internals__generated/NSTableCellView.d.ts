interface NSTableCellViewUninitialized<InitializedType = NSTableCellView> extends NSViewUninitialized<NSTableCellView> {}

interface NSTableCellView extends NSView {

  objectValue(): any;
  setObjectValue(objectValue: any): void;
  textField(): NSTextField;
  setTextField(textField: NSTextField): void;
  imageView(): NSImageView;
  setImageView(imageView: NSImageView): void;
  backgroundStyle(): NSBackgroundStyle;
  setBackgroundStyle(backgroundStyle: NSBackgroundStyle): void;
  rowSizeStyle(): NSTableViewRowSizeStyle;
  setRowSizeStyle(rowSizeStyle: NSTableViewRowSizeStyle): void;
  draggingImageComponents(): NSArray<any>;
}

declare const NSTableCellView: {
  alloc(): NSTableCellViewUninitialized;
  class(): NSTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

