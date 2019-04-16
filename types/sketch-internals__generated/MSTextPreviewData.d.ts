interface MSTextPreviewDataUninitialized<InitializedType = MSTextPreviewData> extends NSObjectUninitialized<MSTextPreviewData> {}
interface MSTextPreviewData extends NSObject {
  findPreviewPageForDocument_layer(document: MSImmutableDocumentData, layer: MSImmutableTextLayer): CGPDFPageRef;

  table(): NSMapTable<any, any>;
}
declare const MSTextPreviewData: {
  alloc(): MSTextPreviewDataUninitialized;
  class(): MSTextPreviewData;  sharedPreviewData(): MSTextPreviewData;

}

