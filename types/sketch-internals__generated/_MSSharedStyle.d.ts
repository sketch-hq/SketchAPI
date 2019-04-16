interface _MSSharedStyleUninitialized<InitializedType = _MSSharedStyle> extends MSSharedObjectUninitialized<_MSSharedStyle> {}
interface _MSSharedStyle extends MSSharedObject {
}
declare const _MSSharedStyle: {
  alloc(): _MSSharedStyleUninitialized;
  class(): _MSSharedStyle;
}

