interface MSFolderMonitorUninitialized<InitializedType = MSFolderMonitor> extends NSObjectUninitialized<MSFolderMonitor> {
  initWithURL_contentsChangedBlock(folderURL: NSURL, block: Block): InitializedType;
  initWithURL_latency_contentsChangedBlock(folderURL: NSURL, latency: NSTimeInterval, block: Block): InitializedType;
}
interface MSFolderMonitor extends NSObject {
  stop(): void;
  restart(): void;
  flush(): void;

  folderURL(): NSURL;
}
declare const MSFolderMonitor: {
  alloc(): MSFolderMonitorUninitialized;
  class(): MSFolderMonitor;
}

