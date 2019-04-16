interface MSCloudManifestMakerUninitialized<InitializedType = MSCloudManifestMaker> extends MSManifestMakerUninitialized<MSCloudManifestMaker> {}

interface MSCloudManifestMaker extends MSManifestMaker {

  delegate(): any;
  setDelegate(delegate: any): void;
  organizationID(): NSString;
  setOrganizationID(organizationID: NSString | string): void;
}

declare const MSCloudManifestMaker: {
  alloc(): MSCloudManifestMakerUninitialized;
  class(): MSCloudManifestMaker;
  keyForFlowAnimationType(type: MSFlowAnimationType): NSString;
}

