interface NSPurgeableDataUninitialized<InitializedType = NSPurgeableData> extends NSMutableDataUninitialized<NSPurgeableData> {}

interface NSPurgeableData extends NSMutableData, INSDiscardableContent {
  beginContentAccess(): boolean;
  endContentAccess(): void;
  discardContentIfPossible(): void;
  isContentDiscarded(): boolean;
}

declare const NSPurgeableData: {
  alloc(): NSPurgeableDataUninitialized;
  class(): NSPurgeableData;
  dataWithCapacity(aNumItems: NSUInteger): NSPurgeableData;
  dataWithLength(length: NSUInteger): NSPurgeableData;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

