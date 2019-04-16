interface MSLayerLineUninitialized<InitializedType = MSLayerLine> extends NSObjectUninitialized<MSLayerLine> {
  initWithPosition_onAxis_forLayer(position: BCOrdered, axis: BCAxis, layer: MSLayer): InitializedType;
}
interface MSLayerLine extends NSObject {
  compare(other: MSLayerLine): NSComparisonResult;
  commitProposedOffset(): void;

  layer(): MSLayer;
  setLayer(layer: MSLayer): void;
  axis(): BCAxis;
  value(): CGFloat;
  position(): BCOrdered;
  previousLayerLine(): MSLayerLine;
  setPreviousLayerLine(previousLayerLine: MSLayerLine): void;
  proposedOffset(): CGFloat;
  setProposedOffset(proposedOffset: CGFloat): void;
}
declare const MSLayerLine: {
  alloc(): MSLayerLineUninitialized;
  class(): MSLayerLine;
}

