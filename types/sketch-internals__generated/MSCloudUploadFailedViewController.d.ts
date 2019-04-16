interface MSCloudUploadFailedViewControllerUninitialized<InitializedType = MSCloudUploadFailedViewController> extends MSCloudBaseViewControllerUninitialized<MSCloudUploadFailedViewController> {}

interface MSCloudUploadFailedViewController extends MSCloudBaseViewController {

  error(): NSError;
  setError(error: NSError): void;
  existingShare(): SCKShare;
  setExistingShare(existingShare: SCKShare): void;
}

declare const MSCloudUploadFailedViewController: {
  alloc(): MSCloudUploadFailedViewControllerUninitialized;
  class(): MSCloudUploadFailedViewController;
}

