interface MSInspectorLeftAlignedPopUpUninitialized<InitializedType = MSInspectorLeftAlignedPopUp> extends NSPopUpButtonUninitialized<MSInspectorLeftAlignedPopUp> {}

interface MSInspectorLeftAlignedPopUp extends NSPopUpButton {
}

declare const MSInspectorLeftAlignedPopUp: {
  alloc(): MSInspectorLeftAlignedPopUpUninitialized;
  class(): MSInspectorLeftAlignedPopUp;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

