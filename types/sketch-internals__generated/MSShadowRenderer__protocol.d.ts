interface IMSShadowRenderer extends IMSRenderer {
  renderShadow_path_cacheObject_windingRule_options_type_strokeType_fillShouldClip_lineWidth_context(shadow: MSImmutableStyleShadow, path: MSPath, cacheObject: any, windingRule: NSWindingRule, options: MSImmutableStyleBorderOptions, shadowType: MSShadowType, strokeType: MSShadowBorderType, fillShouldClip: boolean, width: CGFloat, context: MSRenderingContext): void;
  renderShadow_rect_context_block(shadow: MSImmutableStyleShadow, rect: CGRect, context: MSRenderingContext, block: BCVoidBlock): void;
  renderInnerShadow_path_windingRule_context_cacheObject(shadow: MSImmutableStyleInnerShadow, path: MSPath, windingRule: NSWindingRule, context: MSRenderingContext, cacheObject: any): void;
}

