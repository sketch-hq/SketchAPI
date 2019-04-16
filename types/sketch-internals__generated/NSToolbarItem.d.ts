interface NSToolbarItemUninitialized<InitializedType = NSToolbarItem> extends NSObjectUninitialized<NSToolbarItem> {
  initWithItemIdentifier(itemIdentifier: NSToolbarItemIdentifier): InitializedType;
}
interface NSToolbarItem extends NSObject, INSCopying, INSMenuItemValidation, INSValidatedUserInterfaceItem {
  validate(): void;

  itemIdentifier(): NSToolbarItemIdentifier;
  toolbar(): NSToolbar;
  label(): NSString;
  setLabel(label: NSString | string): void;
  paletteLabel(): NSString;
  setPaletteLabel(paletteLabel: NSString | string): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  menuFormRepresentation(): NSMenuItem;
  setMenuFormRepresentation(menuFormRepresentation: NSMenuItem): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  view(): NSView;
  setView(view: NSView): void;
  minSize(): NSSize;
  setMinSize(minSize: NSSize): void;
  maxSize(): NSSize;
  setMaxSize(maxSize: NSSize): void;
  visibilityPriority(): NSToolbarItemVisibilityPriority;
  setVisibilityPriority(visibilityPriority: NSToolbarItemVisibilityPriority): void;
  autovalidates(): boolean;
  setAutovalidates(autovalidates: boolean): void;
  allowsDuplicatesInToolbar(): boolean;
}
declare const NSToolbarItem: {
  alloc(): NSToolbarItemUninitialized;
  class(): NSToolbarItem;
}

