interface SCKShareVersionUninitialized<InitializedType = SCKShareVersion> extends SCKObjectUninitialized<SCKShareVersion> {}

interface SCKShareVersion extends SCKObject {

  number(): NSUInteger;
  message(): NSString;
  document(): SCKCloudDocument;
}

declare const SCKShareVersion: {
  alloc(): SCKShareVersionUninitialized;
  class(): SCKShareVersion;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

