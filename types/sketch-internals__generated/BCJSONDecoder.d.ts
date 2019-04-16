interface BCJSONDecoderUninitialized<InitializedType = BCJSONDecoder> extends NSObjectUninitialized<BCJSONDecoder> {}
interface BCJSONDecoder extends NSObject {
  decodeData_error(data: NSData, error: NSError): any;
  decodeDictionary_error(dict: NSDictionary<any, any> | {[key: string]: any}, error: NSError): any;
  containsValueForKey(key: NSString | string): boolean;
  decodeObjectForKey(key: NSString | string): any;
  decodeDoubleForKey_withDefault(key: NSString | string, defaultValue: number): number;
  decodeBoolForKey_withDefault(key: NSString | string, defaultValue: boolean): boolean;
  decodeRectForKey_withDefault(key: NSString | string, defaultValue: CGRect): CGRect;
  decodePointForKey_withDefault(key: NSString | string, defaultValue: CGPoint): CGPoint;
  decodeIntegerForKey_withDefault(key: NSString | string, defaultValue: NSInteger): NSInteger;
  decodeSizeForKey_withDefault(key: NSString | string, defaultValue: CGSize): CGSize;

  userInfo(): any;
  setUserInfo(userInfo: any): void;
  error(): NSError;
  setError(error: NSError): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  unarchiver(): MSJSONUnarchiver;
  setUnarchiver(unarchiver: MSJSONUnarchiver): void;
}
declare const BCJSONDecoder: {
  alloc(): BCJSONDecoderUninitialized;
  class(): BCJSONDecoder;  setClass_forClassName(className: any | null, codedName: NSString | string): void;
  decodeFileAtURL_error(url: NSURL, error: NSError): any;

}

