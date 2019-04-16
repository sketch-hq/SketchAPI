interface TDReaderUninitialized<InitializedType = TDReader> extends NSObjectUninitialized<TDReader> {
  initWithString(s: NSString | string): InitializedType;
}
interface TDReader extends NSObject {
  read(): NSInteger;
  unread(): void;

  string(): NSString;
  setString(string: NSString | string): void;
}
declare const TDReader: {
  alloc(): TDReaderUninitialized;
  class(): TDReader;
}

