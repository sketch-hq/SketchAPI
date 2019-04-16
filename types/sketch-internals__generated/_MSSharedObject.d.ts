interface _MSSharedObjectUninitialized<InitializedType = _MSSharedObject> extends MSModelObjectUninitialized<_MSSharedObject> {}

interface _MSSharedObject extends MSModelObject {

  name(): NSString;
  setName(name: NSString | string): void;
  value(): MSModelObjectCommon;
  setValue(value: MSModelObjectCommon): void;
}

declare const _MSSharedObject: {
  alloc(): _MSSharedObjectUninitialized;
  class(): _MSSharedObject;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

