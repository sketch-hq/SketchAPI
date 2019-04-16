interface MSDocumentReaderUninitialized<InitializedType = MSDocumentReader> extends MSArchiveReaderUninitialized<MSDocumentReader> {}

interface MSDocumentReader extends MSArchiveReader {
  repair(): void;
  readDataWithCorruptionDetected_error(corruptionDetected: boolean, error: MOPointer<NSError>): MSDocumentData;
  open(error: MOPointer<NSError>): boolean;
  previewImageWithMaximumSize(size: NSSize): NSImage;
  validate(): MSDocumentErrorCode;
  readImmutableDataWithCorruptionDetected_error(corruptionDetected: boolean, errorOut: MOPointer<NSError>): MSImmutableDocumentData;

  documentWasMigrated(): boolean;
  missingFonts(): NSArray<any>;
  UIMetadata(): NSDictionary<any, any>;
  containsPreviewImage(): boolean;
  previewImage(): NSImage;
  libraryPreviewImage(): NSImage;
  version(): MSDocumentVersion;
  compatibilityVersion(): MSDocumentVersion;
  metadata(): NSDictionary<any, any>;
}

declare const MSDocumentReader: {
  alloc(): MSDocumentReaderUninitialized;
  class(): MSDocumentReader;
  readerForDocumentAtURL(url: NSURL): MSDocumentReader;
  readerForDocumentAtURL_engine(url: NSURL, engine: ECCommandLineEngine): MSDocumentReader;
  first4bytesOfFileAtURL(url: NSURL): number;
  accessInstanceVariablesDirectly(): boolean;

}

