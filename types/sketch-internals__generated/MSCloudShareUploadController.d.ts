interface MSCloudShareUploadControllerUninitialized<InitializedType = MSCloudShareUploadController> extends NSObjectUninitialized<MSCloudShareUploadController> {
  initWithDocument(document: any): InitializedType;
}
interface MSCloudShareUploadController extends NSObject {
  startUpload(): void;
  cancel(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  previousUpload(): MSCloudShareUploadController;
  setPreviousUpload(previousUpload: MSCloudShareUploadController): void;
  existingShare(): SCKShare;
  setExistingShare(existingShare: SCKShare): void;
  organization(): SCKOrganization;
  setOrganization(organization: SCKOrganization): void;
  cancelled(): boolean;
  progress(): NSProgress;
}
declare const MSCloudShareUploadController: {
  alloc(): MSCloudShareUploadControllerUninitialized;
  class(): MSCloudShareUploadController;
}

