interface MSLineEndpointInspectorItemUninitialized<InitializedType = MSLineEndpointInspectorItem> extends MSTwoTextFieldInspectorItemUninitialized<MSLineEndpointInspectorItem> {}
interface MSLineEndpointInspectorItem extends MSTwoTextFieldInspectorItem {
}
declare const MSLineEndpointInspectorItem: {
  alloc(): MSLineEndpointInspectorItemUninitialized;
  class(): MSLineEndpointInspectorItem;
}

