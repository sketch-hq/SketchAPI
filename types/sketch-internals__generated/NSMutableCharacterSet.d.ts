interface NSMutableCharacterSetUninitialized<InitializedType = NSMutableCharacterSet> extends NSCharacterSetUninitialized<NSMutableCharacterSet> {}

interface NSMutableCharacterSet extends NSCharacterSet, INSCopying, INSMutableCopying, INSSecureCoding {
  addCharactersInRange(aRange: NSRange): void;
  removeCharactersInRange(aRange: NSRange): void;
  addCharactersInString(aString: NSString | string): void;
  removeCharactersInString(aString: NSString | string): void;
  formUnionWithCharacterSet(otherSet: NSCharacterSet): void;
  formIntersectionWithCharacterSet(otherSet: NSCharacterSet): void;
  invert(): void;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;
}

declare const NSMutableCharacterSet: {
  alloc(): NSMutableCharacterSetUninitialized;
  class(): NSMutableCharacterSet;
  controlCharacterSet(): NSMutableCharacterSet;
  whitespaceCharacterSet(): NSMutableCharacterSet;
  whitespaceAndNewlineCharacterSet(): NSMutableCharacterSet;
  decimalDigitCharacterSet(): NSMutableCharacterSet;
  letterCharacterSet(): NSMutableCharacterSet;
  lowercaseLetterCharacterSet(): NSMutableCharacterSet;
  uppercaseLetterCharacterSet(): NSMutableCharacterSet;
  nonBaseCharacterSet(): NSMutableCharacterSet;
  alphanumericCharacterSet(): NSMutableCharacterSet;
  decomposableCharacterSet(): NSMutableCharacterSet;
  illegalCharacterSet(): NSMutableCharacterSet;
  punctuationCharacterSet(): NSMutableCharacterSet;
  capitalizedLetterCharacterSet(): NSMutableCharacterSet;
  symbolCharacterSet(): NSMutableCharacterSet;
  newlineCharacterSet(): NSMutableCharacterSet;
  characterSetWithRange(aRange: NSRange): NSMutableCharacterSet;
  characterSetWithCharactersInString(aString: NSString | string): NSMutableCharacterSet;
  characterSetWithBitmapRepresentation(data: NSData): NSMutableCharacterSet;
  characterSetWithContentsOfFile(fName: NSString | string): NSMutableCharacterSet;
  characterSetWithRange(aRange: NSRange): NSCharacterSet;
  characterSetWithCharactersInString(aString: NSString | string): NSCharacterSet;
  characterSetWithBitmapRepresentation(data: NSData): NSCharacterSet;
  characterSetWithContentsOfFile(fName: NSString | string): NSCharacterSet;
  supportsSecureCoding(): boolean;
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
  accessInstanceVariablesDirectly(): boolean;

}

