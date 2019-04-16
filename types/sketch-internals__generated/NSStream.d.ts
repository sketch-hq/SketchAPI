interface NSStreamUninitialized<InitializedType = NSStream> extends NSObjectUninitialized<NSStream> {}
interface NSStream extends NSObject {
  open(): void;
  close(): void;
  propertyForKey(key: NSStreamPropertyKey): any;
  setProperty_forKey(property: any | null, key: NSStreamPropertyKey): boolean;
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  streamStatus(): NSStreamStatus;
  streamError(): NSError;
}
declare const NSStream: {
  alloc(): NSStreamUninitialized;
  class(): NSStream;  getStreamsToHostWithName_port_inputStream_outputStream(hostname: NSString | string, port: NSInteger, inputStream: NSInputStream, outputStream: NSOutputStream): void;
  getStreamsToHost_port_inputStream_outputStream(host: NSHost, port: NSInteger, inputStream: NSInputStream, outputStream: NSOutputStream): void;
  getBoundStreamsWithBufferSize_inputStream_outputStream(bufferSize: NSUInteger, inputStream: NSInputStream, outputStream: NSOutputStream): void;

}

