interface NSCharacterSetUninitialized<InitializedType = NSCharacterSet> extends NSObjectUninitialized<NSCharacterSet> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSCharacterSet extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  characterIsMember(aCharacter: unichar): boolean;
  longCharacterIsMember(theLongChar: string): boolean;
  isSupersetOfSet(theOtherSet: NSCharacterSet): boolean;
  hasMemberInPlane(thePlane: number): boolean;

  bitmapRepresentation(): NSData;
  invertedSet(): NSCharacterSet;
}
declare const NSCharacterSet: {
  alloc(): NSCharacterSetUninitialized;
  class(): NSCharacterSet;  characterSetWithRange(aRange: NSRange): NSCharacterSet;
  characterSetWithCharactersInString(aString: NSString | string): NSCharacterSet;
  characterSetWithBitmapRepresentation(data: NSData): NSCharacterSet;
  characterSetWithContentsOfFile(fName: NSString | string): NSCharacterSet;

  controlCharacterSet(): NSCharacterSet;
  whitespaceCharacterSet(): NSCharacterSet;
  whitespaceAndNewlineCharacterSet(): NSCharacterSet;
  decimalDigitCharacterSet(): NSCharacterSet;
  letterCharacterSet(): NSCharacterSet;
  lowercaseLetterCharacterSet(): NSCharacterSet;
  uppercaseLetterCharacterSet(): NSCharacterSet;
  nonBaseCharacterSet(): NSCharacterSet;
  alphanumericCharacterSet(): NSCharacterSet;
  decomposableCharacterSet(): NSCharacterSet;
  illegalCharacterSet(): NSCharacterSet;
  punctuationCharacterSet(): NSCharacterSet;
  capitalizedLetterCharacterSet(): NSCharacterSet;
  symbolCharacterSet(): NSCharacterSet;
  newlineCharacterSet(): NSCharacterSet;
  URLUserAllowedCharacterSet(): NSCharacterSet;
  URLPasswordAllowedCharacterSet(): NSCharacterSet;
  URLHostAllowedCharacterSet(): NSCharacterSet;
  URLPathAllowedCharacterSet(): NSCharacterSet;
  URLQueryAllowedCharacterSet(): NSCharacterSet;
  URLFragmentAllowedCharacterSet(): NSCharacterSet;

}

