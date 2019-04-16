interface IMSSharedStylesPopUpButtonCellDelegate {
  popupButtonCell_didCreatePreviewImage_forSharedObject(cell: MSSharedStylesPopUpButtonCell, image: NSImage, sharedObject: MSShareableObjectReference): void;
  cachedImageForPopupButtonCell_withSharedObject(cell: MSSharedStylesPopUpButtonCell, sharedObject: MSShareableObjectReference): NSImage;
}

