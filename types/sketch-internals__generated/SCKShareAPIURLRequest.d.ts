interface SCKShareAPIURLRequestUninitialized<InitializedType = SCKShareAPIURLRequest> extends SCKAPIURLRequestUninitialized<SCKShareAPIURLRequest> {}

interface SCKShareAPIURLRequest extends SCKAPIURLRequest {
}

declare const SCKShareAPIURLRequest: {
  alloc(): SCKShareAPIURLRequestUninitialized;
  class(): SCKShareAPIURLRequest;
  shareRequestWithID(shareID: SCKObjectID): SCKShareAPIURLRequest;
  shareRequestWithShortID(shortID: NSString | string): SCKShareAPIURLRequest;
  shareLibraryAppcastRequestWithShortID(shortID: NSString | string): SCKShareAPIURLRequest;
  userSharesListRequest(): SCKShareAPIURLRequest;
  shareCreationRequestWithManifest(manifest: NSDictionary<any, any> | {[key: string]: any}): SCKShareAPIURLRequest;
  shareUpdateRequestWithManifest_existingShare(manifest: NSDictionary<any, any> | {[key: string]: any}, share: SCKShare): SCKShareAPIURLRequest;
  shareDeletionRequestWithID(shareID: SCKObjectID): SCKShareAPIURLRequest;
  shareCancelUpdateRequestWithID(shareID: SCKObjectID): SCKShareAPIURLRequest;
  baseURLForEnvironment(environment: SCKAPIEnvironment): NSURL;
  requestWithPath_queryItems_environment(path: NSString | string, parameters: NSDictionary<any, any> | {[key: string]: any} | null, environment: SCKAPIEnvironment): SCKShareAPIURLRequest;
  requestWithPath_environment(path: NSString | string, environment: SCKAPIEnvironment): SCKShareAPIURLRequest;
  requestWithPath(path: NSString | string): SCKShareAPIURLRequest;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

