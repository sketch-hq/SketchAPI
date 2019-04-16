interface _MSImmutableSharedStyleUninitialized<InitializedType = _MSImmutableSharedStyle> extends MSImmutableSharedObjectUninitialized<_MSImmutableSharedStyle> {}

interface _MSImmutableSharedStyle extends MSImmutableSharedObject {
}

declare const _MSImmutableSharedStyle: {
  alloc(): _MSImmutableSharedStyleUninitialized;
  class(): _MSImmutableSharedStyle;
}

