interface MSCloudUploadViewControllerUninitialized<InitializedType = MSCloudUploadViewController> extends MSCloudBaseViewControllerUninitialized<MSCloudUploadViewController> {}
interface MSCloudUploadViewController extends MSCloudBaseViewController {
}
declare const MSCloudUploadViewController: {
  alloc(): MSCloudUploadViewControllerUninitialized;
  class(): MSCloudUploadViewController;
}

