interface MSInlineTextLabelImageCellUninitialized<InitializedType = MSInlineTextLabelImageCell> extends NSTextFieldCellUninitialized<MSInlineTextLabelImageCell> {}

interface MSInlineTextLabelImageCell extends NSTextFieldCell {
}

declare const MSInlineTextLabelImageCell: {
  alloc(): MSInlineTextLabelImageCellUninitialized;
  class(): MSInlineTextLabelImageCell;
  inlineTextLabelFont(): NSFont;
  prefersTrackingUntilMouseUp(): boolean;
  defaultMenu(): NSMenu;
  defaultFocusRingType(): NSFocusRingType;

}

