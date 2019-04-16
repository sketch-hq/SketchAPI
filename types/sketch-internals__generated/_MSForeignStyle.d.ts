interface _MSForeignStyleUninitialized<InitializedType = _MSForeignStyle> extends MSForeignObjectUninitialized<_MSForeignStyle> {}
interface _MSForeignStyle extends MSForeignObject {

  remoteStyleID(): NSString;
  setRemoteStyleID(remoteStyleID: NSString | string): void;
  localSharedStyle(): MSSharedStyle;
  setLocalSharedStyle(localSharedStyle: MSSharedStyle): void;
}
declare const _MSForeignStyle: {
  alloc(): _MSForeignStyleUninitialized;
  class(): _MSForeignStyle;
}

