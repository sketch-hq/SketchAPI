interface _MSFreeformGroupLayoutUninitialized<InitializedType = _MSFreeformGroupLayout> extends MSGroupLayoutUninitialized<_MSFreeformGroupLayout> {}

interface _MSFreeformGroupLayout extends MSGroupLayout {
}

declare const _MSFreeformGroupLayout: {
  alloc(): _MSFreeformGroupLayoutUninitialized;
  class(): _MSFreeformGroupLayout;
}

