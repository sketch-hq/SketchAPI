interface NSEnumeratorUninitialized<ObjectType, InitializedType = NSEnumerator<ObjectType>> extends NSObjectUninitialized<NSEnumerator<ObjectType>> {}
interface NSEnumerator<ObjectType> extends NSObject, INSFastEnumeration {
  nextObject(): ObjectType;

  allObjects(): NSArray<any>;
}
declare const NSEnumerator: {
  alloc<ObjectType>(): NSEnumeratorUninitialized<ObjectType>;
  class(): NSEnumerator;
}

