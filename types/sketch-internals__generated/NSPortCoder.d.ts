interface NSPortCoderUninitialized<InitializedType = NSPortCoder> extends NSCoderUninitialized<NSPortCoder> {
  initWithReceivePort_sendPort_components(rcvPort: NSPort | null, sndPort: NSPort | null, comps: NSArray<any> | any[] | null): InitializedType;
}

interface NSPortCoder extends NSCoder {
  isBycopy(): boolean;
  isByref(): boolean;
  encodePortObject(aport: NSPort): void;
  decodePortObject(): NSPort;
  connection(): NSConnection;
  dispatch(): void;
}

declare const NSPortCoder: {
  alloc(): NSPortCoderUninitialized;
  class(): NSPortCoder;
  portCoderWithReceivePort_sendPort_components(rcvPort: NSPort | null, sndPort: NSPort | null, comps: NSArray<any> | any[] | null): any;
  accessInstanceVariablesDirectly(): boolean;

}

