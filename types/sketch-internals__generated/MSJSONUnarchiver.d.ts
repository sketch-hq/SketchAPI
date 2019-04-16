interface MSJSONUnarchiverUninitialized<InitializedType = MSJSONUnarchiver> extends MSBaseUnarchiverUninitialized<MSJSONUnarchiver> {}
interface MSJSONUnarchiver extends MSBaseUnarchiver {
  decodeReferenceObjectOfClass_withIdentifier(className: NSString | string | null, identifier: NSString | string | null): any;
  referenceObjectWithIdentifier(identifier: NSString | string | null): any;
  addReference_withIdentifier(reference: any, identifier: NSString | string): void;
}
declare const MSJSONUnarchiver: {
  alloc(): MSJSONUnarchiverUninitialized;
  class(): MSJSONUnarchiver;
}

