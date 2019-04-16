interface MSBitmapLayerSectionUninitialized<InitializedType = MSBitmapLayerSection> extends MSSingleItemInspectorSectionUninitialized<MSBitmapLayerSection> {}

interface MSBitmapLayerSection extends MSSingleItemInspectorSection {
}

declare const MSBitmapLayerSection: {
  alloc(): MSBitmapLayerSectionUninitialized;
  class(): MSBitmapLayerSection;
  itemClass(): any;
  canHandleLayer(layer: MSLayer): boolean;
}

