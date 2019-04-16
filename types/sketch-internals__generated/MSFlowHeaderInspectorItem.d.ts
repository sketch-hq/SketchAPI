interface MSFlowHeaderInspectorItemUninitialized<InitializedType = MSFlowHeaderInspectorItem> extends MSCollapsibleHeaderInspectorItemUninitialized<MSFlowHeaderInspectorItem> {}

interface MSFlowHeaderInspectorItem extends MSCollapsibleHeaderInspectorItem {
}

declare const MSFlowHeaderInspectorItem: {
  alloc(): MSFlowHeaderInspectorItemUninitialized;
  class(): MSFlowHeaderInspectorItem;
}

