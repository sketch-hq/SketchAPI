interface MSInspectorPopUpButtonUninitialized<InitializedType = MSInspectorPopUpButton> extends NSPopUpButtonUninitialized<MSInspectorPopUpButton> {}

interface MSInspectorPopUpButton extends NSPopUpButton {
}

declare const MSInspectorPopUpButton: {
  alloc(): MSInspectorPopUpButtonUninitialized;
  class(): MSInspectorPopUpButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

