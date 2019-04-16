interface MSStylePartPreviewButtonUninitialized<InitializedType = MSStylePartPreviewButton> extends MSInspectorButtonUninitialized<MSStylePartPreviewButton> {}

interface MSStylePartPreviewButton extends MSInspectorButton {
  drawButton(): void;

  stylePart(): MSStylePart;
  setStylePart(stylePart: MSStylePart): void;
  color(): NSColor;
  setColor(color: NSColor): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  dragOwner(): any;
  setDragOwner(dragOwner: any): void;
}

declare const MSStylePartPreviewButton: {
  alloc(): MSStylePartPreviewButtonUninitialized;
  class(): MSStylePartPreviewButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

