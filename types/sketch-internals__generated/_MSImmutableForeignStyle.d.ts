interface _MSImmutableForeignStyleUninitialized<InitializedType = _MSImmutableForeignStyle> extends MSImmutableForeignObjectUninitialized<_MSImmutableForeignStyle> {}

interface _MSImmutableForeignStyle extends MSImmutableForeignObject {

  remoteStyleID(): NSString;
  localSharedStyle(): MSImmutableSharedStyle;
}

declare const _MSImmutableForeignStyle: {
  alloc(): _MSImmutableForeignStyleUninitialized;
  class(): _MSImmutableForeignStyle;
}

