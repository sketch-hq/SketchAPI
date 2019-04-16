interface CAGradientLayerUninitialized<InitializedType = CAGradientLayer> extends CALayerUninitialized<CAGradientLayer> {}
interface CAGradientLayer extends CALayer {

  colors(): NSArray<any>;
  setColors(colors: NSArray<any> | any[]): void;
  locations(): NSArray<any>;
  setLocations(locations: NSArray<any> | any[]): void;
  startPoint(): CGPoint;
  setStartPoint(startPoint: CGPoint): void;
  endPoint(): CGPoint;
  setEndPoint(endPoint: CGPoint): void;
  type(): CAGradientLayerType;
  setType(type: CAGradientLayerType): void;
}
declare const CAGradientLayer: {
  alloc(): CAGradientLayerUninitialized;
  class(): CAGradientLayer;
}

