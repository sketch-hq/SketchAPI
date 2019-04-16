interface MSShareableObjectPopUpButtonUninitialized<InitializedType = MSShareableObjectPopUpButton> extends NSPopUpButtonUninitialized<MSShareableObjectPopUpButton> {}

interface MSShareableObjectPopUpButton extends NSPopUpButton {
  updateWithMenuBuilder_forLayers(menuBuilder: MSForeignObjectMenuBuilder, layers: NSArray<any> | any[]): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
}

declare const MSShareableObjectPopUpButton: {
  alloc(): MSShareableObjectPopUpButtonUninitialized;
  class(): MSShareableObjectPopUpButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

