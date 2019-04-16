interface MSAlignmentEngineCycleUninitialized<InitializedType = MSAlignmentEngineCycle> {}

interface MSAlignmentEngineCycle {
}

declare const MSAlignmentEngineCycle: {
  alloc(): MSAlignmentEngineCycleUninitialized;
  class(): MSAlignmentEngineCycle;
}

