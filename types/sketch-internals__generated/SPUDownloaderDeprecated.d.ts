interface SPUDownloaderDeprecatedUninitialized<InitializedType = SPUDownloaderDeprecated> extends SPUDownloaderUninitialized<SPUDownloaderDeprecated> {}
interface SPUDownloaderDeprecated extends SPUDownloader, ISPUDownloaderProtocol {
}
declare const SPUDownloaderDeprecated: {
  alloc(): SPUDownloaderDeprecatedUninitialized;
  class(): SPUDownloaderDeprecated;
}

