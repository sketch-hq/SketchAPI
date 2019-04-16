interface INSViewLayerContentScaleDelegate {
  layer_shouldInheritContentsScale_fromWindow(layer: CALayer, newScale: CGFloat, window: NSWindow): boolean;
}

