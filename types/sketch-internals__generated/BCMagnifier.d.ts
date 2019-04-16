interface BCMagnifierUninitialized<InitializedType = BCMagnifier> extends NSObjectUninitialized<BCMagnifier> {}
interface BCMagnifier extends NSObject {
}
declare const BCMagnifier: {
  alloc(): BCMagnifierUninitialized;
  class(): BCMagnifier;  pickColorInColorSpace_completionHandler(colorSpace: NSColorSpace, completionHandler: BCMagnifierCompletionBlock): void;

}

