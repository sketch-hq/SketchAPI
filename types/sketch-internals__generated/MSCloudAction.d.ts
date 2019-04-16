interface MSCloudActionUninitialized<InitializedType = MSCloudAction> extends MSPopoverActionUninitialized<MSCloudAction> {}
interface MSCloudAction extends MSPopoverAction {
  startUploadUpdating_ownedByOrganization(existingShare: SCKShare | null, organization: SCKOrganization | null): void;
  refreshShareWithHandler(handler: Block): void;
  updateProgressImage(): void;
  prepareCloseWithHandler(handler: Block): void;
  document_shouldClose_contextInfo(document: NSDocument, shouldClose: boolean, contextInfo: void | null): void;

  exportedDocument(): any;
  upload(): MSCloudShareUploadController;
  setUpload(upload: MSCloudShareUploadController): void;
  refreshOperation(): SCKAPIOperation;
  setRefreshOperation(refreshOperation: SCKAPIOperation): void;
  canCloseImmediately(): boolean;
}
declare const MSCloudAction: {
  alloc(): MSCloudActionUninitialized;
  class(): MSCloudAction;  isErrorRecoverable(error: NSError): boolean;
  cloudError_addingRecoveryOptionsWithAttempter(error: NSError, attempter: any): NSError;
  attemptRecoveryFromCloudError_optionIndex(error: NSError, recoveryOptionIndex: NSUInteger): void;
  prepareTerminationWithHandler(handler: Block): void;

  userController(): SCKUserController;
  cloudEnabled(): boolean;
  shouldPrepareForTermination(): boolean;

}

