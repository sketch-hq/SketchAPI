interface _MSImmutableArtboardGroupUninitialized<InitializedType = _MSImmutableArtboardGroup> extends MSImmutableLayerGroupUninitialized<_MSImmutableArtboardGroup> {}

interface _MSImmutableArtboardGroup extends MSImmutableLayerGroup {

  hasBackgroundColor(): boolean;
  includeBackgroundColorInExport(): boolean;
  includeInCloudUpload(): boolean;
  isFlowHome(): boolean;
  presetDictionary(): NSDictionary<any, any>;
  resizesContent(): boolean;
  backgroundColor(): MSImmutableColor;
  grid(): MSImmutableSimpleGrid;
  horizontalRulerData(): MSImmutableRulerData;
  layout(): MSImmutableLayoutGrid;
  verticalRulerData(): MSImmutableRulerData;
}

declare const _MSImmutableArtboardGroup: {
  alloc(): _MSImmutableArtboardGroupUninitialized;
  class(): _MSImmutableArtboardGroup;
}

