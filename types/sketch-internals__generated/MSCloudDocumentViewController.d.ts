interface MSCloudDocumentViewControllerUninitialized<InitializedType = MSCloudDocumentViewController> extends MSCloudBaseViewControllerUninitialized<MSCloudDocumentViewController> {}

interface MSCloudDocumentViewController extends MSCloudBaseViewController {
}

declare const MSCloudDocumentViewController: {
  alloc(): MSCloudDocumentViewControllerUninitialized;
  class(): MSCloudDocumentViewController;
}

