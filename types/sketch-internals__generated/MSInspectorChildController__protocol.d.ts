interface IMSInspectorChildController {
  prepareForDisplay(): void;
  selectionDidChangeTo(layers: NSArray<any> | any[]): void;
  refreshIfNecessary(treeDiff: MSTreeDiff): void;
  layerPositionPossiblyChanged(): void;
}

