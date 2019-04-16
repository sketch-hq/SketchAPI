interface SPUDownloaderSessionUninitialized<InitializedType = SPUDownloaderSession> extends SPUDownloaderUninitialized<SPUDownloaderSession> {}
interface SPUDownloaderSession extends SPUDownloader, ISPUDownloaderProtocol {
}
declare const SPUDownloaderSession: {
  alloc(): SPUDownloaderSessionUninitialized;
  class(): SPUDownloaderSession;
}

