interface NSUUIDUninitialized<InitializedType = NSUUID> extends NSObjectUninitialized<NSUUID> {
  init(): InitializedType;
  initWithUUIDString(string: NSString | string): InitializedType;
  initWithUUIDBytes(bytes: uuid_t): InitializedType;
}
interface NSUUID extends NSObject, INSCopying, INSSecureCoding {
  getUUIDBytes(uuid: uuid_t): void;

  UUIDString(): NSString;
}
declare const NSUUID: {
  alloc(): NSUUIDUninitialized;
  class(): NSUUID;  UUID(): NSUUID;

}

