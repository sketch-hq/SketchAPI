interface IMSFillRenderer extends IMSRenderer {
  renderFill_path_layer_index_rect_hasInnerStroke_context(fill: MSImmutableStyleFill, path: MSPath, layer: MSImmutableStyledLayer, index: NSInteger, rect: CGRect, hasInnerStroke: boolean, context: MSRenderingContext): void;
}

