interface IMSLayerRenderer extends IMSRenderer {
  renderLayer_ignoreDrawingArea_context(layer: MSImmutableLayer, ignoreDrawingArea: boolean, context: MSRenderingContext): void;
  renderLayerUncached_ignoreDrawingArea_context(layer: MSImmutableLayer, ignoreDrawingArea: boolean, context: MSRenderingContext): void;
}

