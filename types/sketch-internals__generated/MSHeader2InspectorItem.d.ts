interface MSHeader2InspectorItemUninitialized<InitializedType = MSHeader2InspectorItem> extends MSInspectorItemUninitialized<MSHeader2InspectorItem> {}
interface MSHeader2InspectorItem extends MSInspectorItem {

  labelText(): NSString;
  setLabelText(labelText: NSString | string): void;
}
declare const MSHeader2InspectorItem: {
  alloc(): MSHeader2InspectorItemUninitialized;
  class(): MSHeader2InspectorItem;
}

