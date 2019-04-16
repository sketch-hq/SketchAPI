interface MSInspectorPopUpButtonUninitialized<InitializedType = MSInspectorPopUpButton> extends NSPopUpButtonUninitialized<MSInspectorPopUpButton> {}

interface MSInspectorPopUpButton extends NSPopUpButton {
}

declare const MSInspectorPopUpButton: {
  alloc(): MSInspectorPopUpButtonUninitialized;
  class(): MSInspectorPopUpButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

