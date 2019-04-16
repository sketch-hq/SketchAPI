interface SMKArtboardMessageContentUninitialized<InitializedType = SMKArtboardMessageContent> extends NSObjectUninitialized<SMKArtboardMessageContent> {}
interface SMKArtboardMessageContent extends NSObject, ISMKMessageCoding {

  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
  rect(): CGRect;
  setRect(rect: CGRect): void;
  constrainingSize(): CGSize;
  setConstrainingSize(constrainingSize: CGSize): void;
}
declare const SMKArtboardMessageContent: {
  alloc(): SMKArtboardMessageContentUninitialized;
  class(): SMKArtboardMessageContent;
}

