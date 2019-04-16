interface NSPurgeableDataUninitialized<InitializedType = NSPurgeableData> extends NSMutableDataUninitialized<NSPurgeableData> {}
interface NSPurgeableData extends NSMutableData, INSDiscardableContent {
}
declare const NSPurgeableData: {
  alloc(): NSPurgeableDataUninitialized;
  class(): NSPurgeableData;
}

