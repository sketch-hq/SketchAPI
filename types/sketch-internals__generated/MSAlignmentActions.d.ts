interface MSAlignmentActionsUninitialized<InitializedType = MSAlignmentActions> extends MSActionGroupUninitialized<MSAlignmentActions> {}
interface MSAlignmentActions extends MSActionGroup {
}
declare const MSAlignmentActions: {
  alloc(): MSAlignmentActionsUninitialized;
  class(): MSAlignmentActions;
}

