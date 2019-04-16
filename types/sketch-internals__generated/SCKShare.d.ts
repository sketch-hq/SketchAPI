interface SCKShareUninitialized<InitializedType = SCKShare> extends SCKObjectUninitialized<SCKShare> {}
interface SCKShare extends SCKObject {
  readOnlyCopy(): SCKShare;

  shortID(): NSString;
  publicURL(): NSURL;
  isPrivate(): boolean;
  currentVersion(): SCKShareVersion;
  canUpdate(): boolean;
  owner(): SCKUser;
}
declare const SCKShare: {
  alloc(): SCKShareUninitialized;
  class(): SCKShare;
}

