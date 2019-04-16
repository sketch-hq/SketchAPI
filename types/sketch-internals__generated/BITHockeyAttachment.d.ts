interface BITHockeyAttachmentUninitialized<InitializedType = BITHockeyAttachment> extends NSObjectUninitialized<BITHockeyAttachment> {
  initWithFilename_hockeyAttachmentData_contentType(filename: NSString | string, hockeyAttachmentData: NSData, contentType: NSString | string): InitializedType;
}
interface BITHockeyAttachment extends NSObject, INSCoding, INSCoding, INSCoding {

  filename(): NSString;
  hockeyAttachmentData(): NSData;
  contentType(): NSString;
}
declare const BITHockeyAttachment: {
  alloc(): BITHockeyAttachmentUninitialized;
  class(): BITHockeyAttachment;
}

