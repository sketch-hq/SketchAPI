interface NSInputStreamUninitialized<InitializedType = NSInputStream> extends NSStreamUninitialized<NSInputStream> {
  initWithData(data: NSData): InitializedType;
  initWithURL(url: NSURL): InitializedType;
  initWithFileAtPath(path: NSString | string): InitializedType;
}
interface NSInputStream extends NSStream {
  read_maxLength(buffer: number, len: NSUInteger): NSInteger;
  getBuffer_length(buffer: number, len: NSUInteger): boolean;

  hasBytesAvailable(): boolean;
}
declare const NSInputStream: {
  alloc(): NSInputStreamUninitialized;
  class(): NSInputStream;  inputStreamWithData(data: NSData): NSInputStream;
  inputStreamWithFileAtPath(path: NSString | string): NSInputStream;
  inputStreamWithURL(url: NSURL): NSInputStream;

}

