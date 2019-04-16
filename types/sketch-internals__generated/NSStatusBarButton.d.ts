interface NSStatusBarButtonUninitialized<InitializedType = NSStatusBarButton> extends NSButtonUninitialized<NSStatusBarButton> {}

interface NSStatusBarButton extends NSButton {

  appearsDisabled(): boolean;
  setAppearsDisabled(appearsDisabled: boolean): void;
}

declare const NSStatusBarButton: {
  alloc(): NSStatusBarButtonUninitialized;
  class(): NSStatusBarButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): NSStatusBarButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSStatusBarButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): NSStatusBarButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSStatusBarButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSStatusBarButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

