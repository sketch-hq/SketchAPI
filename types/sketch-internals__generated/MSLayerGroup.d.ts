interface MSLayerGroupUninitialized<InitializedType = MSLayerGroup> extends _MSLayerGroupUninitialized<MSLayerGroup> {}
interface MSLayerGroup extends _MSLayerGroup, IMSLayerGroup {
  prepareAsMaskContainer(): void;
  enumerateLayersAvoidingFaultingWithOptions_passingTest_usingBlock(options: MSLayerEnumeratorFlags, predicate: MSLayerIteratorTestBlock, enumeratorBlock: MSLayerIteratorBlock): void;
  ungroup(): NSArray<any>;
  ungroupSingleChildDescendentGroups(): void;
  applyTransformsToLayers(layers: NSArray<any> | any[]): void;
  disableAutomaticScalingInBlock(block: BCVoidBlock): void;
  optimalBoundingBoxInParentCoordinates(): NSRect;
  optimalBoundingBox(): NSRect;
  shouldResizeToFitBounds(rect: NSRect): boolean;
  groupBoundsShouldBeIntegral(): boolean;
  deselectLayerAndParent(): void;
  fixGeometryWithOptions(resizeOption: MSFixGroupGeometryOptions): boolean;
  moveTransformsToChildren(): void;
  insertLayer_afterLayerOrAtEnd(layer: MSLayer, after: MSLayer | null): void;
  resizeChildrenWithOldSize(oldSize: NSSize): void;
  shouldStripShadowsAndInnerShadow(): boolean;
  defaultLayout(): MSGroupLayout;

  hasInferredLayout(): boolean;
  setHasInferredLayout(hasInferredLayout: boolean): void;
  isAutomaticScalingEnabled(): boolean;
}
declare const MSLayerGroup: {
  alloc(): MSLayerGroupUninitialized;
  class(): MSLayerGroup;  groupWithLayer(layer: MSLayer): MSLayerGroup;
  groupWithLayers(layers: MSLayerArray): MSLayerGroup;

}

