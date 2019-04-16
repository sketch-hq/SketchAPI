interface NSOutputStreamUninitialized<InitializedType = NSOutputStream> extends NSStreamUninitialized<NSOutputStream> {
  initToMemory(): InitializedType;
  initToBuffer_capacity(buffer: number, capacity: NSUInteger): InitializedType;
  initWithURL_append(url: NSURL, shouldAppend: boolean): InitializedType;
  initToFileAtPath_append(path: NSString | string, shouldAppend: boolean): InitializedType;
}
interface NSOutputStream extends NSStream {
  write_maxLength(buffer: number, len: NSUInteger): NSInteger;

  hasSpaceAvailable(): boolean;
}
declare const NSOutputStream: {
  alloc(): NSOutputStreamUninitialized;
  class(): NSOutputStream;  outputStreamToMemory(): NSOutputStream;
  outputStreamToBuffer_capacity(buffer: number, capacity: NSUInteger): NSOutputStream;
  outputStreamToFileAtPath_append(path: NSString | string, shouldAppend: boolean): NSOutputStream;
  outputStreamWithURL_append(url: NSURL, shouldAppend: boolean): NSOutputStream;

}

