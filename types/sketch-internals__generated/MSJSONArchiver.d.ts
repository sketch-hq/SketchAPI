interface MSJSONArchiverUninitialized<InitializedType = MSJSONArchiver> extends MSBaseArchiverUninitialized<MSJSONArchiver> {}

interface MSJSONArchiver extends MSBaseArchiver {
  replacementObjectForObject(object: NSObject): NSObject;
}

declare const MSJSONArchiver: {
  alloc(): MSJSONArchiverUninitialized;
  class(): MSJSONArchiver;
  archiverFromCoder(coder: BCJSONEncoder): MSJSONArchiver;
  archiveObject_coder(object: NSObject, coder: BCJSONEncoder): void;
  archivedDataWithHeaderAndRootObject(root: NSObject): NSData;
  accessInstanceVariablesDirectly(): boolean;

}

