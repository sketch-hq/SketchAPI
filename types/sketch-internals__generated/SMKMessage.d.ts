interface SMKMessageUninitialized<InitializedType = SMKMessage> extends NSObjectUninitialized<SMKMessage> {
  initWithType(type: NSString | string): InitializedType;
}
interface SMKMessage extends NSObject, ISMKMessageCoding {

  type(): NSString;
  setType(type: NSString | string): void;
  contentClass(): any;
  content(): any;
  setContent(content: any): void;
  messageData(): NSData;
}
declare const SMKMessage: {
  alloc(): SMKMessageUninitialized;
  class(): SMKMessage;  messageFromData(data: NSData): SMKMessage;

}

