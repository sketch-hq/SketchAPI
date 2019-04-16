interface COSRUninitialized<InitializedType = COSR> extends NSObjectUninitialized<COSR> {}
interface COSR extends NSObject {
}
declare const COSR: {
  alloc(): COSRUninitialized;
  class(): COSR;
}

