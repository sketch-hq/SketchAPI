interface MOAllocatorUninitialized<InitializedType = MOAllocator> extends NSObjectUninitialized<MOAllocator> {}
interface MOAllocator extends NSObject {

  objectClass(): any;
  setObjectClass(objectClass: any): void;
}
declare const MOAllocator: {
  alloc(): MOAllocatorUninitialized;
  class(): MOAllocator;  allocator(): MOAllocator;

}

