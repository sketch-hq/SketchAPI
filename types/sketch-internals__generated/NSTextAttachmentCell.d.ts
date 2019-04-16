interface NSTextAttachmentCellUninitialized<InitializedType = NSTextAttachmentCell> extends NSCellUninitialized<NSTextAttachmentCell> {}
interface NSTextAttachmentCell extends NSCell, INSTextAttachmentCell {
}
declare const NSTextAttachmentCell: {
  alloc(): NSTextAttachmentCellUninitialized;
  class(): NSTextAttachmentCell;
}

