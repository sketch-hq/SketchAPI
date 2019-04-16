interface MSSharedObjectUninitialized<InitializedType = MSSharedObject> extends _MSSharedObjectUninitialized<MSSharedObject> {
  initWithName_sharedObjectID_value(name: NSString | string, sharedObjectID: NSString | string, value: MSSharedObjectInstance): InitializedType;
}

interface MSSharedObject extends _MSSharedObject, IBCSortable {

  updateToMatch: (instance: MSSharedObjectInstance) => void
  isOutOfSyncWithInstance(instance: MSSharedObjectInstance): boolean;

  name(): NSString;
}

declare const MSSharedObject: {
  alloc(): MSSharedObjectUninitialized;
  class(): MSSharedObject;
}

