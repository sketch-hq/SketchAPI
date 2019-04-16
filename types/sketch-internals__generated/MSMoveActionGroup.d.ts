interface MSMoveActionGroupUninitialized<InitializedType = MSMoveActionGroup> extends MSActionGroupUninitialized<MSMoveActionGroup> {}
interface MSMoveActionGroup extends MSActionGroup {
}
declare const MSMoveActionGroup: {
  alloc(): MSMoveActionGroupUninitialized;
  class(): MSMoveActionGroup;
}

