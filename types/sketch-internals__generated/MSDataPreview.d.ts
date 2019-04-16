interface MSDataPreviewUninitialized<InitializedType = MSDataPreview> extends NSViewUninitialized<MSDataPreview> {}
interface MSDataPreview extends NSView {

  dataItem(): MSDataPreferenceItem;
  setDataItem(dataItem: MSDataPreferenceItem): void;
}
declare const MSDataPreview: {
  alloc(): MSDataPreviewUninitialized;
  class(): MSDataPreview;
}

