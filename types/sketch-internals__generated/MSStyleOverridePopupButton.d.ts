interface MSStyleOverridePopupButtonUninitialized<InitializedType = MSStyleOverridePopupButton> extends NSPopUpButtonUninitialized<MSStyleOverridePopupButton> {}

interface MSStyleOverridePopupButton extends NSPopUpButton {
  buildMenuForOverride_withMenuBuilder_document_imageCallback(primaryOverride: MSAvailableOverride, menuBuilder: MSForeignObjectMenuBuilder, document: MSDocumentData, imageCallback: Block): void;
  applyPreviewImage(image: NSImage): void;
}

declare const MSStyleOverridePopupButton: {
  alloc(): MSStyleOverridePopupButtonUninitialized;
  class(): MSStyleOverridePopupButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

