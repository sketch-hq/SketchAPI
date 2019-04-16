interface BCIOSStyleSwitchButtonUninitialized<InitializedType = BCIOSStyleSwitchButton> extends NSButtonUninitialized<BCIOSStyleSwitchButton> {}

interface BCIOSStyleSwitchButton extends NSButton {
}

declare const BCIOSStyleSwitchButton: {
  alloc(): BCIOSStyleSwitchButtonUninitialized;
  class(): BCIOSStyleSwitchButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): BCIOSStyleSwitchButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCIOSStyleSwitchButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): BCIOSStyleSwitchButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCIOSStyleSwitchButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): BCIOSStyleSwitchButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

