interface NSCountedSetUninitialized<ObjectType, InitializedType = NSCountedSet<ObjectType>> extends NSMutableSetUninitialized<ObjectType, NSCountedSet<ObjectType>> {}
interface NSCountedSet<ObjectType> extends NSMutableSet<ObjectType> {
  countForObject(object: ObjectType): NSUInteger;
  objectEnumerator(): NSEnumerator<any>;
  addObject(object: ObjectType): void;
  removeObject(object: ObjectType): void;
}
declare const NSCountedSet: {
  alloc<ObjectType>(): NSCountedSetUninitialized<ObjectType>;
  class(): NSCountedSet;
}

