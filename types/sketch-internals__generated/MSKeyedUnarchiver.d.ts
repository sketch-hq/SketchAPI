interface MSKeyedUnarchiverUninitialized<InitializedType = MSKeyedUnarchiver> extends MSBaseUnarchiverUninitialized<MSKeyedUnarchiver> {}

interface MSKeyedUnarchiver extends MSBaseUnarchiver {

  legacyImages(): NSDictionary<any, any>;
  setLegacyImages(legacyImages: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const MSKeyedUnarchiver: {
  alloc(): MSKeyedUnarchiverUninitialized;
  class(): MSKeyedUnarchiver;
  unarchiveObjectFromURL_error(url: NSURL, error: NSError): any;
  unarchiveObjectWithData(data: NSData): any;
  unarchiveObjectWithData_actualVersion_error(data: NSData, actualVersion: MSDocumentVersion | null, error: NSError): any;
  unarchiveObjectWithData_asVersion_corruptionDetected_error(data: NSData, version: MSDocumentVersion, corruption: boolean | null, error: NSError): any;
  accessInstanceVariablesDirectly(): boolean;

}

