interface MSSizeInspectorValueAdaptorUninitialized<InitializedType = MSSizeInspectorValueAdaptor> extends MSCoordinateInspectorValueAdaptorUninitialized<MSSizeInspectorValueAdaptor> {}

interface MSSizeInspectorValueAdaptor extends MSCoordinateInspectorValueAdaptor {
}

declare const MSSizeInspectorValueAdaptor: {
  alloc(): MSSizeInspectorValueAdaptorUninitialized;
  class(): MSSizeInspectorValueAdaptor;
}

