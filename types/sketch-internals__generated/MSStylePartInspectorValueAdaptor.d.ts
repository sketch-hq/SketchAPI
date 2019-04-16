interface MSStylePartInspectorValueAdaptorUninitialized<InitializedType = MSStylePartInspectorValueAdaptor> extends MSInspectorValueAdaptorUninitialized<MSStylePartInspectorValueAdaptor> {}
interface MSStylePartInspectorValueAdaptor extends MSInspectorValueAdaptor {
}
declare const MSStylePartInspectorValueAdaptor: {
  alloc(): MSStylePartInspectorValueAdaptorUninitialized;
  class(): MSStylePartInspectorValueAdaptor;
}

