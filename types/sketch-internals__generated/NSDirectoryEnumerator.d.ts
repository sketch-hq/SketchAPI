interface NSDirectoryEnumeratorUninitialized<ObjectType, InitializedType = NSDirectoryEnumerator<ObjectType>> extends NSEnumeratorUninitialized<ObjectType, NSDirectoryEnumerator<ObjectType>> {}
interface NSDirectoryEnumerator<ObjectType> extends NSEnumerator<ObjectType> {
  skipDescendents(): void;
  skipDescendants(): void;

  fileAttributes(): NSDictionary<any, any>;
  directoryAttributes(): NSDictionary<any, any>;
  level(): NSUInteger;
}
declare const NSDirectoryEnumerator: {
  alloc<ObjectType>(): NSDirectoryEnumeratorUninitialized<ObjectType>;
  class(): NSDirectoryEnumerator;
}

