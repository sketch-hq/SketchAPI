interface TDTokenUninitialized<InitializedType = TDToken> extends NSObjectUninitialized<TDToken> {
  initWithTokenType_stringValue_floatValue(t: TDTokenType, s: NSString | string, n: CGFloat): InitializedType;
}
interface TDToken extends NSObject {
  isEqualIgnoringCase(obj: any): boolean;
  debugDescription(): NSString;

  whitespace(): boolean;
  number(): boolean;
  quotedString(): boolean;
  symbol(): boolean;
  word(): boolean;
  comment(): boolean;
  tokenType(): TDTokenType;
  floatValue(): CGFloat;
  stringValue(): NSString;
  value(): any;
}
declare const TDToken: {
  alloc(): TDTokenUninitialized;
  class(): TDToken;  EOFToken(): TDToken;
  tokenWithTokenType_stringValue_floatValue(t: TDTokenType, s: NSString | string, n: CGFloat): any;

}

