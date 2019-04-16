interface MSFileMonitorUninitialized<InitializedType = MSFileMonitor> extends MSFolderMonitorUninitialized<MSFileMonitor> {}
interface MSFileMonitor extends MSFolderMonitor {
}
declare const MSFileMonitor: {
  alloc(): MSFileMonitorUninitialized;
  class(): MSFileMonitor;
}

