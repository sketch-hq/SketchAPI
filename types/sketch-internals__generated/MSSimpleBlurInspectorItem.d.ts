interface MSSimpleBlurInspectorItemUninitialized<InitializedType = MSSimpleBlurInspectorItem> extends MSBaseBlurInspectorItemUninitialized<MSSimpleBlurInspectorItem> {}

interface MSSimpleBlurInspectorItem extends MSBaseBlurInspectorItem {
}

declare const MSSimpleBlurInspectorItem: {
  alloc(): MSSimpleBlurInspectorItemUninitialized;
  class(): MSSimpleBlurInspectorItem;
}

