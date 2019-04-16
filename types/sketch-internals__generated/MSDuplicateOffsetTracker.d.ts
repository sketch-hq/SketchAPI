interface MSDuplicateOffsetTrackerUninitialized<InitializedType = MSDuplicateOffsetTracker> extends NSObjectUninitialized<MSDuplicateOffsetTracker> {}
interface MSDuplicateOffsetTracker extends NSObject {
  reset(): void;
  resetToInitialOffset(): void;
  increment(): void;
  offset(): CGFloat;
}
declare const MSDuplicateOffsetTracker: {
  alloc(): MSDuplicateOffsetTrackerUninitialized;
  class(): MSDuplicateOffsetTracker;
}

