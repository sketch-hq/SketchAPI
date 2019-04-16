interface MSSharedObjectContainerUninitialized<InitializedType = MSSharedObjectContainer> extends _MSSharedObjectContainerUninitialized<MSSharedObjectContainer> {}
interface MSSharedObjectContainer extends _MSSharedObjectContainer {
  removeSharedObjects(sharedObjects: NSArray<any> | any[]): void;
  objectsReferencing_inContainer(sharedObjectIDs: NSSet<any>, container: any): NSArray<any>;
  sharedObjectWithID(sharedObjectID: NSString | string): MSSharedObject;
  sharedObjectAtIndex(index: NSUInteger): MSSharedObject;
  indexOfSharedObject(sharedObject: MSSharedObject): NSInteger;
  numberOfSharedObjects(): NSUInteger;
  objectsSortedByName(): NSArray<any>;
}
declare const MSSharedObjectContainer: {
  alloc(): MSSharedObjectContainerUninitialized;
  class(): MSSharedObjectContainer;
}

