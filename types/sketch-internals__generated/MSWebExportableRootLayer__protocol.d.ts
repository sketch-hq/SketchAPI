interface IMSWebExportableRootLayer {
  webExportLayerBehaviorWithRect_fromLayer(rect: CGRect, layer: MSImmutableLayer): MSWebExportLayerBehavior;
  rectInFixedViewportWithRect_fromFixingLayer(rect: CGRect, layer: MSImmutableLayer): CGRect;

  webExporterBackgoundColor(): MSImmutableColor;
  webExporterShouldIncludeBackgroundColor(): boolean;
  isFlowHome(): boolean;
  preset(): MSArtboardPreset;
  containsFixedLayers(): boolean;
}

