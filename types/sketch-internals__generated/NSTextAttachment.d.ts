interface NSTextAttachmentUninitialized<InitializedType = NSTextAttachment> extends NSObjectUninitialized<NSTextAttachment> {
  initWithData_ofType(contentData: NSData | null, uti: NSString | string | null): InitializedType;
  initWithFileWrapper(fileWrapper: NSFileWrapper | null): InitializedType;
}
interface NSTextAttachment extends NSObject, INSTextAttachmentContainer, INSCoding {

  contents(): NSData;
  setContents(contents: NSData): void;
  fileType(): NSString;
  setFileType(fileType: NSString | string): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  bounds(): NSRect;
  setBounds(bounds: NSRect): void;
  fileWrapper(): NSFileWrapper;
  setFileWrapper(fileWrapper: NSFileWrapper): void;
  attachmentCell(): any;
  setAttachmentCell(attachmentCell: any): void;
}
declare const NSTextAttachment: {
  alloc(): NSTextAttachmentUninitialized;
  class(): NSTextAttachment;
}

