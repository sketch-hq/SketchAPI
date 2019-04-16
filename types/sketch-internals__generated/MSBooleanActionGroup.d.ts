interface MSBooleanActionGroupUninitialized<InitializedType = MSBooleanActionGroup> extends MSActionGroupUninitialized<MSBooleanActionGroup> {}
interface MSBooleanActionGroup extends MSActionGroup {
}
declare const MSBooleanActionGroup: {
  alloc(): MSBooleanActionGroupUninitialized;
  class(): MSBooleanActionGroup;
}

