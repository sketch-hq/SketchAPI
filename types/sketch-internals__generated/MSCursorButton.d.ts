interface MSCursorButtonUninitialized<InitializedType = MSCursorButton> extends NSButtonUninitialized<MSCursorButton> {}

interface MSCursorButton extends NSButton {

  cursor(): NSCursor;
  setCursor(cursor: NSCursor): void;
}

declare const MSCursorButton: {
  alloc(): MSCursorButtonUninitialized;
  class(): MSCursorButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): MSCursorButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSCursorButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): MSCursorButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSCursorButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSCursorButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

