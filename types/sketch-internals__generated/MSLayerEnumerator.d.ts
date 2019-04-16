interface MSLayerEnumeratorUninitialized<ObjectType, InitializedType = MSLayerEnumerator<ObjectType>> extends NSEnumeratorUninitialized<ObjectType, MSLayerEnumerator<ObjectType>> {}
interface MSLayerEnumerator<ObjectType> extends NSEnumerator<ObjectType> {
  nextObject(): ObjectType;
  skipDescendants(): void;
}
declare const MSLayerEnumerator: {
  alloc<ObjectType>(): MSLayerEnumeratorUninitialized<ObjectType>;
  class(): MSLayerEnumerator;
}

