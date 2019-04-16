interface _MSShapeGroupUninitialized<InitializedType = _MSShapeGroup> extends MSLayerGroupUninitialized<_MSShapeGroup> {}

interface _MSShapeGroup extends MSLayerGroup {
}

declare const _MSShapeGroup: {
  alloc(): _MSShapeGroupUninitialized;
  class(): _MSShapeGroup;
  groupWithLayer(layer: MSLayer): _MSShapeGroup;
  groupWithLayers(layers: MSLayerArray): _MSShapeGroup;
}

