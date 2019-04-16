interface MSJSONDictionaryUnarchiverUninitialized<InitializedType = MSJSONDictionaryUnarchiver> extends MSJSONUnarchiverUninitialized<MSJSONDictionaryUnarchiver> {}
interface MSJSONDictionaryUnarchiver extends MSJSONUnarchiver {
}
declare const MSJSONDictionaryUnarchiver: {
  alloc(): MSJSONDictionaryUnarchiverUninitialized;
  class(): MSJSONDictionaryUnarchiver;  unarchiveObjectFromDictionary_asVersion_corruptionDetected_error(dict: NSDictionary<any, any> | {[key: string]: any}, version: MSDocumentVersion, corruption: boolean | null, error: NSError): any;

}

