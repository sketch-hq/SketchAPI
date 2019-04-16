interface MSSharedObjectUninitialized<InitializedType = MSSharedObject> extends _MSSharedObjectUninitialized<MSSharedObject> {
  initWithName_sharedObjectID_value(name: NSString | string, sharedObjectID: NSString | string, value: MSSharedObjectInstance): InitializedType;
}
interface MSSharedObject extends _MSSharedObject, IBCSortable {
  isOutOfSyncWithInstance(instance: MSSharedObjectInstance): boolean;
}
declare const MSSharedObject: {
  alloc(): MSSharedObjectUninitialized;
  class(): MSSharedObject;
}

