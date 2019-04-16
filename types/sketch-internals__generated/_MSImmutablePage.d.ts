interface _MSImmutablePageUninitialized<InitializedType = _MSImmutablePage> extends MSImmutableLayerGroupUninitialized<_MSImmutablePage> {}

interface _MSImmutablePage extends MSImmutableLayerGroup {

  includeInCloudUpload(): boolean;
  grid(): MSImmutableSimpleGrid;
  horizontalRulerData(): MSImmutableRulerData;
  layout(): MSImmutableLayoutGrid;
  verticalRulerData(): MSImmutableRulerData;
}

declare const _MSImmutablePage: {
  alloc(): _MSImmutablePageUninitialized;
  class(): _MSImmutablePage;
}

