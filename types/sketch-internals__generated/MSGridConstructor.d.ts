interface MSGridConstructorUninitialized<InitializedType = MSGridConstructor> extends NSObjectUninitialized<MSGridConstructor> {}
interface MSGridConstructor extends NSObject {
  makeGridWithLayers_options(layers: MSLayerArray, options: MSMakeGridOptions): void;
}
declare const MSGridConstructor: {
  alloc(): MSGridConstructorUninitialized;
  class(): MSGridConstructor;
}

