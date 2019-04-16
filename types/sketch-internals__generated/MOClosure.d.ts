interface MOClosureUninitialized<InitializedType = MOClosure> extends NSObjectUninitialized<MOClosure> {
  initWithBlock(block: any): InitializedType;
}
interface MOClosure extends NSObject {

  block(): any;
  callAddress(): void;
  typeEncoding(): string;
}
declare const MOClosure: {
  alloc(): MOClosureUninitialized;
  class(): MOClosure;  closureWithBlock(block: any): MOClosure;

}

