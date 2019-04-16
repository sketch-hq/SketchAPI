interface MSMotionBlurInspectorItemUninitialized<InitializedType = MSMotionBlurInspectorItem> extends MSBaseBlurInspectorItemUninitialized<MSMotionBlurInspectorItem> {}
interface MSMotionBlurInspectorItem extends MSBaseBlurInspectorItem {
}
declare const MSMotionBlurInspectorItem: {
  alloc(): MSMotionBlurInspectorItemUninitialized;
  class(): MSMotionBlurInspectorItem;
}

