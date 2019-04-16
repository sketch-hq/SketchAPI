interface MSHoverButtonUninitialized<InitializedType = MSHoverButton> extends NSButtonUninitialized<MSHoverButton> {}

interface MSHoverButton extends NSButton {

  mouseIsHovering(): boolean;
  setMouseIsHovering(mouseIsHovering: boolean): void;
}

declare const MSHoverButton: {
  alloc(): MSHoverButtonUninitialized;
  class(): MSHoverButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): MSHoverButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSHoverButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): MSHoverButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSHoverButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSHoverButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

