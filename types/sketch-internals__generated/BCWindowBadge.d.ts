interface BCWindowBadgeUninitialized<InitializedType = BCWindowBadge> extends NSButtonUninitialized<BCWindowBadge> {}

interface BCWindowBadge extends NSButton {

  tintColor(): NSColor;
  setTintColor(tintColor: NSColor): void;
}

declare const BCWindowBadge: {
  alloc(): BCWindowBadgeUninitialized;
  class(): BCWindowBadge;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): BCWindowBadge;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCWindowBadge;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): BCWindowBadge;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCWindowBadge;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCWindowBadge;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

