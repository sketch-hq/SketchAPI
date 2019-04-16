interface MSInspectorButtonUninitialized<InitializedType = MSInspectorButton> extends NSButtonUninitialized<MSInspectorButton> {}

interface MSInspectorButton extends NSButton {
}

declare const MSInspectorButton: {
  alloc(): MSInspectorButtonUninitialized;
  class(): MSInspectorButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): MSInspectorButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSInspectorButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): MSInspectorButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSInspectorButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSInspectorButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

