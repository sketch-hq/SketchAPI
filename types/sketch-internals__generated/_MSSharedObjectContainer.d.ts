interface _MSSharedObjectContainerUninitialized<InitializedType = _MSSharedObjectContainer> extends MSModelObjectUninitialized<_MSSharedObjectContainer> {}
interface _MSSharedObjectContainer extends MSModelObject {
  addSharedObject(value: MSSharedObject): void;
  addSharedObjects(objects: NSArray<any> | any[]): void;
  insertSharedObject_atIndex(value: MSSharedObject, index: NSUInteger): void;
  insertSharedObject_beforeSharedObject(value: MSSharedObject, after: MSSharedObject | null): void;
  insertSharedObjects_beforeSharedObject(values: NSArray<any> | any[], before: MSSharedObject | null): void;
  insertSharedObject_afterSharedObject(value: MSSharedObject, after: MSSharedObject | null): void;
  insertSharedObjects_afterSharedObject(values: NSArray<any> | any[], after: MSSharedObject | null): void;
  removeSharedObject(value: MSSharedObject): void;
  removeSharedObjectAtIndex(index: NSUInteger): void;
  removeSharedObjectsAtIndexes(indexes: NSIndexSet): void;
  removeAllSharedObjects(): void;
  moveSharedObjectIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  objects(): NSArray<any>;
  setObjects(objects: NSArray<any> | any[]): void;
}
declare const _MSSharedObjectContainer: {
  alloc(): _MSSharedObjectContainerUninitialized;
  class(): _MSSharedObjectContainer;
}

