interface ICALayerDelegate {
  displayLayer(layer: CALayer): void;
  drawLayer_inContext(layer: CALayer, ctx: CGContextRef): void;
  layerWillDraw(layer: CALayer): void;
  layoutSublayersOfLayer(layer: CALayer): void;
  actionForLayer_forKey(layer: CALayer, event: NSString | string): any;
}

