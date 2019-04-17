interface NSInputStreamUninitialized<InitializedType = NSInputStream> extends NSStreamUninitialized<NSInputStream> {
  initWithData(data: NSData): InitializedType;
  initWithURL(url: NSURL): InitializedType;
  initWithFileAtPath(path: NSString | string): InitializedType;
}

interface NSInputStream extends NSStream {
  read_maxLength(buffer: number, len: NSUInteger): NSInteger;
  getBuffer_length(buffer: MOPointer<number>, len: NSUInteger): boolean;

  hasBytesAvailable(): boolean;
}

declare const NSInputStream: {
  alloc(): NSInputStreamUninitialized;
  class(): NSInputStream;
  inputStreamWithData(data: NSData): NSInputStream;
  inputStreamWithFileAtPath(path: NSString | string): NSInputStream;
  inputStreamWithURL(url: NSURL): NSInputStream;
  getStreamsToHostWithName_port_inputStream_outputStream(hostname: NSString | string, port: NSInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
  getStreamsToHost_port_inputStream_outputStream(host: NSHost, port: NSInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
  getBoundStreamsWithBufferSize_inputStream_outputStream(bufferSize: NSUInteger, inputStream: MOPointer<NSInputStream>, outputStream: MOPointer<NSOutputStream>): void;
  accessInstanceVariablesDirectly(): boolean;

}

