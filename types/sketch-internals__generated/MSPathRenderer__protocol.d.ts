interface IMSPathRenderer extends IMSRenderer {
  renderPath_style_layer_inRect_fallbackColor_context(path: MSPath, style: MSImmutableStyle, layer: MSImmutableStyledLayer, rect: CGRect, fillColor: CGColorRef | null, context: MSRenderingContext): void;
  renderFillsForPath_style_layer_rect_context(path: MSPath, style: MSImmutableStyle, layer: MSImmutableStyledLayer, rect: CGRect, context: MSRenderingContext): void;
  renderBordersForPath_style_applyClip_rect_context(path: MSPath, style: MSImmutableStyle, canClip: boolean, rect: CGRect, context: MSRenderingContext): void;
}

