interface BCAssertionUninitialized<InitializedType = BCAssertion> extends NSObjectUninitialized<BCAssertion> {}
interface BCAssertion extends NSObject {
}
declare const BCAssertion: {
  alloc(): BCAssertionUninitialized;
  class(): BCAssertion;  assertObject_isOfClass(object: any, c: any): any;

}

