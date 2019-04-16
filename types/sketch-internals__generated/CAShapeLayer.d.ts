interface CAShapeLayerUninitialized<InitializedType = CAShapeLayer> extends CALayerUninitialized<CAShapeLayer> {}
interface CAShapeLayer extends CALayer {

  path(): CGPathRef;
  setPath(path: CGPathRef): void;
  fillColor(): CGColorRef;
  setFillColor(fillColor: CGColorRef): void;
  fillRule(): CAShapeLayerFillRule;
  setFillRule(fillRule: CAShapeLayerFillRule): void;
  strokeColor(): CGColorRef;
  setStrokeColor(strokeColor: CGColorRef): void;
  strokeStart(): CGFloat;
  setStrokeStart(strokeStart: CGFloat): void;
  strokeEnd(): CGFloat;
  setStrokeEnd(strokeEnd: CGFloat): void;
  lineWidth(): CGFloat;
  setLineWidth(lineWidth: CGFloat): void;
  miterLimit(): CGFloat;
  setMiterLimit(miterLimit: CGFloat): void;
  lineCap(): CAShapeLayerLineCap;
  setLineCap(lineCap: CAShapeLayerLineCap): void;
  lineJoin(): CAShapeLayerLineJoin;
  setLineJoin(lineJoin: CAShapeLayerLineJoin): void;
  lineDashPhase(): CGFloat;
  setLineDashPhase(lineDashPhase: CGFloat): void;
  lineDashPattern(): NSArray<any>;
  setLineDashPattern(lineDashPattern: NSArray<any> | any[]): void;
}
declare const CAShapeLayer: {
  alloc(): CAShapeLayerUninitialized;
  class(): CAShapeLayer;
}

