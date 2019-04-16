interface MSPaddingInspectorItemUninitialized<InitializedType = MSPaddingInspectorItem> extends MSInspectorItemUninitialized<MSPaddingInspectorItem> {}
interface MSPaddingInspectorItem extends MSInspectorItem {

  wantsSeparator(): boolean;
  setWantsSeparator(wantsSeparator: boolean): void;
  wantsInsetSeparator(): boolean;
  setWantsInsetSeparator(wantsInsetSeparator: boolean): void;
}
declare const MSPaddingInspectorItem: {
  alloc(): MSPaddingInspectorItemUninitialized;
  class(): MSPaddingInspectorItem;  paddingWithHeight(height: CGFloat): MSPaddingInspectorItem;

}

