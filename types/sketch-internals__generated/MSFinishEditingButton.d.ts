interface MSFinishEditingButtonUninitialized<InitializedType = MSFinishEditingButton> extends NSButtonUninitialized<MSFinishEditingButton> {}

interface MSFinishEditingButton extends NSButton {
}

declare const MSFinishEditingButton: {
  alloc(): MSFinishEditingButtonUninitialized;
  class(): MSFinishEditingButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): MSFinishEditingButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSFinishEditingButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): MSFinishEditingButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSFinishEditingButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSFinishEditingButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

