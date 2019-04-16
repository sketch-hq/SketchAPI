interface NSPortMessageUninitialized<InitializedType = NSPortMessage> extends NSObjectUninitialized<NSPortMessage> {
  initWithSendPort_receivePort_components(sendPort: NSPort | null, replyPort: NSPort | null, components: NSArray<any> | any[] | null): InitializedType;
}
interface NSPortMessage extends NSObject {
  sendBeforeDate(date: NSDate): boolean;

  components(): NSArray<any>;
  receivePort(): NSPort;
  sendPort(): NSPort;
  msgid(): number;
  setMsgid(msgid: number): void;
}
declare const NSPortMessage: {
  alloc(): NSPortMessageUninitialized;
  class(): NSPortMessage;
}

