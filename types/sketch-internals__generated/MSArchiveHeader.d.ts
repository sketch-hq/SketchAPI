interface MSArchiveHeaderUninitialized<InitializedType = MSArchiveHeader> extends NSObjectUninitialized<MSArchiveHeader> {}
interface MSArchiveHeader extends NSObject, IMSCoding {

  version(): NSInteger;
  setVersion(version: NSInteger): void;
  compatibilityVersion(): NSInteger;
  setCompatibilityVersion(compatibilityVersion: NSInteger): void;
  metadata(): NSDictionary<any, any>;
  setMetadata(metadata: NSDictionary<any, any> | {[key: string]: any}): void;
  root(): any;
  setRoot(root: any): void;
}
declare const MSArchiveHeader: {
  alloc(): MSArchiveHeaderUninitialized;
  class(): MSArchiveHeader;  metadataForNewHeader(): NSDictionary<any, any>;

}

