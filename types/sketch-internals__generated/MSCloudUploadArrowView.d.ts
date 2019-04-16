interface MSCloudUploadArrowViewUninitialized<InitializedType = MSCloudUploadArrowView> extends NSViewUninitialized<MSCloudUploadArrowView> {}
interface MSCloudUploadArrowView extends NSView {
  startAnimation(): void;
}
declare const MSCloudUploadArrowView: {
  alloc(): MSCloudUploadArrowViewUninitialized;
  class(): MSCloudUploadArrowView;
}

