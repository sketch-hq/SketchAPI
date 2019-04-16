interface MSJSONDataUnarchiverUninitialized<InitializedType = MSJSONDataUnarchiver> extends MSJSONUnarchiverUninitialized<MSJSONDataUnarchiver> {}
interface MSJSONDataUnarchiver extends MSJSONUnarchiver {
}
declare const MSJSONDataUnarchiver: {
  alloc(): MSJSONDataUnarchiverUninitialized;
  class(): MSJSONDataUnarchiver;  unarchiveObjectWithString_asVersion_corruptionDetected_error(jsonString: NSString | string, version: MSDocumentVersion, corruption: boolean | null, error: NSError): any;

}

