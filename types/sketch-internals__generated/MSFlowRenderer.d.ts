interface MSFlowRendererUninitialized<InitializedType = MSFlowRenderer> extends NSObjectUninitialized<MSFlowRenderer> {}
interface MSFlowRenderer extends NSObject {
  renderFlowItems_selectedLayerIDs_backingScaleFactor_translation_zoomLevel_renderer_settings(flowItems: NSSet<any>, selectedLayerIDs: NSSet<any>, backingScaleFactor: CGFloat, p: CGPoint, zoomLevel: CGFloat, renderer: any, settings: MSRenderingDriverSettings): void;
  renderFlowsItems_selectedLayerIDs_context_zoomLevel_settings(flowItems: NSSet<any>, selectedLayerIDs: NSSet<any>, context: CGContextRef, zoomLevel: CGFloat, settings: MSRenderingDriverSettings): void;
}
declare const MSFlowRenderer: {
  alloc(): MSFlowRendererUninitialized;
  class(): MSFlowRenderer;
}

