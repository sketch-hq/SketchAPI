interface NSTextAlternativesUninitialized<InitializedType = NSTextAlternatives> extends NSObjectUninitialized<NSTextAlternatives> {
  initWithPrimaryString_alternativeStrings(primaryString: NSString | string, alternativeStrings: NSArray<any> | any[]): InitializedType;
}
interface NSTextAlternatives extends NSObject {
  noteSelectedAlternativeString(alternativeString: NSString | string): void;

  primaryString(): NSString;
  alternativeStrings(): NSArray<any>;
}
declare const NSTextAlternatives: {
  alloc(): NSTextAlternativesUninitialized;
  class(): NSTextAlternatives;
}

