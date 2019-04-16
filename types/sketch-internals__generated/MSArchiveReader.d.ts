interface MSArchiveReaderUninitialized<InitializedType = MSArchiveReader> extends NSObjectUninitialized<MSArchiveReader> {}
interface MSArchiveReader extends NSObject {
}
declare const MSArchiveReader: {
  alloc(): MSArchiveReaderUninitialized;
  class(): MSArchiveReader;  first4bytesOfFileAtURL(url: NSURL): number;

}

