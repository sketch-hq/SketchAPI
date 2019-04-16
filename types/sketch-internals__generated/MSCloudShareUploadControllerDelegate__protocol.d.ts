interface IMSCloudShareUploadControllerDelegate {
  cloudShareController_didUploadShare(controller: MSCloudShareUploadController, share: SCKShare): void;
  cloudShareControllerDidCancelUploading(controller: MSCloudShareUploadController): void;
  cloudShareController_uploadDidFailWithError(controller: MSCloudShareUploadController, error: NSError | null): void;
  cloudShareController_didChangeProgress(controller: MSCloudShareUploadController, progress: NSProgress | null): void;
}

