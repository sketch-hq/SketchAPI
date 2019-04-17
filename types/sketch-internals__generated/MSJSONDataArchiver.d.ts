interface MSJSONDataArchiverUninitialized<InitializedType = MSJSONDataArchiver> extends MSJSONArchiverUninitialized<MSJSONDataArchiver> {}

interface MSJSONDataArchiver extends MSJSONArchiver {
}

declare const MSJSONDataArchiver: {
  alloc(): MSJSONDataArchiverUninitialized;
  class(): MSJSONDataArchiver;
  archiveStringWithRootObject_error(root: NSObject, error: MOPointer<NSError>): NSString;
  archiverFromCoder(coder: BCJSONEncoder): MSJSONArchiver;
  archiveObject_coder(object: NSObject, coder: BCJSONEncoder): void;
  accessInstanceVariablesDirectly(): boolean;

}

