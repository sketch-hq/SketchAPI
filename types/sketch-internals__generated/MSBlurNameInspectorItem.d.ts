interface MSBlurNameInspectorItemUninitialized<InitializedType = MSBlurNameInspectorItem> extends MSStylePartInspectorItemUninitialized<MSBlurNameInspectorItem> {}

interface MSBlurNameInspectorItem extends MSStylePartInspectorItem {
}

declare const MSBlurNameInspectorItem: {
  alloc(): MSBlurNameInspectorItemUninitialized;
  class(): MSBlurNameInspectorItem;
}

