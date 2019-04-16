interface MSImmutableLayerGroupUninitialized<InitializedType = MSImmutableLayerGroup> extends _MSImmutableLayerGroupUninitialized<MSImmutableLayerGroup> {}
interface MSImmutableLayerGroup extends _MSImmutableLayerGroup, IMSLayerGroup {
  axisForInferredLayouts(): BCAxisMask;
  influenceRectClipsToBounds(): boolean;
  includeChildrenInCalculatingStyleSize(): boolean;
  pathCombiningChildrenByApplyingBlock(block: Block): MSPath;
  defaultLayout(): MSImmutableGroupLayout;
  constraintForLayer(layer: MSImmutableLayer): BCConstraint;
  addChildrenToElement_exporter(parentElement: NSXMLElement, exporter: SketchSVGExporter): void;

  hasInferredLayout(): boolean;
  mirrorExportScale(): CGFloat;
  mirrorViewPortSize(): CGSize;
}
declare const MSImmutableLayerGroup: {
  alloc(): MSImmutableLayerGroupUninitialized;
  class(): MSImmutableLayerGroup;
}

