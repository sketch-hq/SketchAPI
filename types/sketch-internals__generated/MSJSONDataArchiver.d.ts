interface MSJSONDataArchiverUninitialized<InitializedType = MSJSONDataArchiver> extends MSJSONArchiverUninitialized<MSJSONDataArchiver> {}
interface MSJSONDataArchiver extends MSJSONArchiver {
}
declare const MSJSONDataArchiver: {
  alloc(): MSJSONDataArchiverUninitialized;
  class(): MSJSONDataArchiver;  archiveStringWithRootObject_error(root: NSObject, error: NSError): NSString;

}

