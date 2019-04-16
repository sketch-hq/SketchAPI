interface _MSImmutableLayerGroupUninitialized<InitializedType = _MSImmutableLayerGroup> extends MSImmutableStyledLayerUninitialized<_MSImmutableLayerGroup> {}
interface _MSImmutableLayerGroup extends MSImmutableStyledLayer {

  hasClickThrough(): boolean;
  sharedObjectID(): NSString;
  groupLayout(): MSImmutableGroupLayout;
  layers(): NSArray<any>;
}
declare const _MSImmutableLayerGroup: {
  alloc(): _MSImmutableLayerGroupUninitialized;
  class(): _MSImmutableLayerGroup;
}

