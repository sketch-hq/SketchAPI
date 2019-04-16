interface NSExceptionUninitialized<InitializedType = NSException> extends NSObjectUninitialized<NSException> {
  initWithName_reason_userInfo(aName: NSExceptionName, aReason: NSString | string | null, aUserInfo: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSException extends NSObject, INSCopying, INSCoding {
  raise(): void;

  name(): NSExceptionName;
  reason(): NSString;
  userInfo(): NSDictionary<any, any>;
  callStackReturnAddresses(): NSArray<any>;
  callStackSymbols(): NSArray<any>;
}
declare const NSException: {
  alloc(): NSExceptionUninitialized;
  class(): NSException;  exceptionWithName_reason_userInfo(name: NSExceptionName, reason: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSException;
  raise_format(name: NSExceptionName, format: NSString | string, ...args: any[]): void;
  raise_format_arguments(name: NSExceptionName, format: NSString | string, ...argList: any[]): void;

}

