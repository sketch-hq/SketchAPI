interface MSGroupActionGroupUninitialized<InitializedType = MSGroupActionGroup> extends MSActionGroupUninitialized<MSGroupActionGroup> {}

interface MSGroupActionGroup extends MSActionGroup {
}

declare const MSGroupActionGroup: {
  alloc(): MSGroupActionGroupUninitialized;
  class(): MSGroupActionGroup;
}

