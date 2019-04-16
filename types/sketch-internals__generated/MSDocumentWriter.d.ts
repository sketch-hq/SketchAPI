interface MSDocumentWriterUninitialized<InitializedType = MSDocumentWriter> extends NSObjectUninitialized<MSDocumentWriter> {
  initWithFileURL(url: NSURL): InitializedType;
}
interface MSDocumentWriter extends NSObject {
  writeDocumentData_isAutosave_error(data: MSImmutableDocumentData, isAutosave: boolean, error: NSError): boolean;

  UIMetadata(): NSDictionary<any, any>;
  setUIMetadata(UIMetadata: NSDictionary<any, any> | {[key: string]: any}): void;
  previewGenerationBlock(): imageGenerationBlock;
  setPreviewGenerationBlock(previewGenerationBlock: imageGenerationBlock): void;
}
declare const MSDocumentWriter: {
  alloc(): MSDocumentWriterUninitialized;
  class(): MSDocumentWriter;  metadataForNewFile(): NSDictionary<any, any>;

}

