interface MSZoomBlurInspectorItemUninitialized<InitializedType = MSZoomBlurInspectorItem> extends MSBaseBlurInspectorItemUninitialized<MSZoomBlurInspectorItem> {}

interface MSZoomBlurInspectorItem extends MSBaseBlurInspectorItem {
}

declare const MSZoomBlurInspectorItem: {
  alloc(): MSZoomBlurInspectorItemUninitialized;
  class(): MSZoomBlurInspectorItem;
}

