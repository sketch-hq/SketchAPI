interface BCAtomicStackUninitialized<ObjectType, InitializedType = BCAtomicStack<ObjectType>> extends NSObjectUninitialized<BCAtomicStack<ObjectType>> {}
interface BCAtomicStack<ObjectType> extends NSObject {
  push(object: ObjectType): void;
  pop(): ObjectType;
}
declare const BCAtomicStack: {
  alloc<ObjectType>(): BCAtomicStackUninitialized<ObjectType>;
  class(): BCAtomicStack;
}

