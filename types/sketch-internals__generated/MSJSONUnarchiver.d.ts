interface MSJSONUnarchiverUninitialized<InitializedType = MSJSONUnarchiver> extends MSBaseUnarchiverUninitialized<MSJSONUnarchiver> {}

interface MSJSONUnarchiver extends MSBaseUnarchiver {
  decodeReferenceObjectOfClass_withIdentifier(className: NSString | string | null, identifier: NSString | string | null): any;
  referenceObjectWithIdentifier(identifier: NSString | string | null): any;
  addReference_withIdentifier(reference: any, identifier: NSString | string): void;
}

declare const MSJSONUnarchiver: {
  alloc(): MSJSONUnarchiverUninitialized;
  class(): MSJSONUnarchiver;
  unarchiveObjectWithData(data: NSData): any;
  unarchiveObjectWithData_actualVersion_error(data: NSData, actualVersion: MSDocumentVersion | null, error: MOPointer<NSError>): any;
  unarchiveObjectWithData_asVersion_corruptionDetected_error(data: NSData, version: MSDocumentVersion, corruption: boolean | null, error: MOPointer<NSError>): any;
  accessInstanceVariablesDirectly(): boolean;

}

