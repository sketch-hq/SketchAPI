interface NSPortUninitialized<InitializedType = NSPort> extends NSObjectUninitialized<NSPort> {}
interface NSPort extends NSObject, INSCopying, INSCoding {
  invalidate(): void;
  setDelegate(anObject: any | null): void;
  delegate(): any;
  scheduleInRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  sendBeforeDate_components_from_reserved(limitDate: NSDate, components: NSMutableArray<any> | any[] | null, receivePort: NSPort | null, headerSpaceReserved: NSUInteger): boolean;
  sendBeforeDate_msgid_components_from_reserved(limitDate: NSDate, msgID: NSUInteger, components: NSMutableArray<any> | any[] | null, receivePort: NSPort | null, headerSpaceReserved: NSUInteger): boolean;
  addConnection_toRunLoop_forMode(conn: NSConnection, runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeConnection_fromRunLoop_forMode(conn: NSConnection, runLoop: NSRunLoop, mode: NSRunLoopMode): void;

  valid(): boolean;
  reservedSpaceLength(): NSUInteger;
}
declare const NSPort: {
  alloc(): NSPortUninitialized;
  class(): NSPort;  port(): NSPort;

}

