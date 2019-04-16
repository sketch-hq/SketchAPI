interface _MSLayerGroupUninitialized<InitializedType = _MSLayerGroup> extends MSStyledLayerUninitialized<_MSLayerGroup> {}
interface _MSLayerGroup extends MSStyledLayer {
  addLayer(value: MSLayer): void;
  addLayers(layers: NSArray<any> | any[]): void;
  insertLayer_atIndex(value: MSLayer, index: NSUInteger): void;
  insertLayer_beforeLayer(value: MSLayer, after: MSLayer | null): void;
  insertLayers_beforeLayer(values: NSArray<any> | any[], before: MSLayer | null): void;
  insertLayer_afterLayer(value: MSLayer, after: MSLayer | null): void;
  insertLayers_afterLayer(values: NSArray<any> | any[], after: MSLayer | null): void;
  removeLayer(value: MSLayer): void;
  removeLayerAtIndex(index: NSUInteger): void;
  removeLayersAtIndexes(indexes: NSIndexSet): void;
  removeAllLayers(): void;
  moveLayerIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  hasClickThrough(): boolean;
  setHasClickThrough(hasClickThrough: boolean): void;
  sharedObjectID(): NSString;
  setSharedObjectID(sharedObjectID: NSString | string): void;
  groupLayout(): MSGroupLayout;
  setGroupLayout(groupLayout: MSGroupLayout): void;
  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
}
declare const _MSLayerGroup: {
  alloc(): _MSLayerGroupUninitialized;
  class(): _MSLayerGroup;
}

