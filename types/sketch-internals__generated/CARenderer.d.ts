interface CARendererUninitialized<InitializedType = CARenderer> extends NSObjectUninitialized<CARenderer> {}
interface CARenderer extends NSObject {
  beginFrameAtTime_timeStamp(t: CFTimeInterval, ts: CVTimeStamp | null): void;
  updateBounds(): CGRect;
  addUpdateRect(r: CGRect): void;
  render(): void;
  nextFrameTime(): CFTimeInterval;
  endFrame(): void;
  setDestination(tex: any): void;

  layer(): CALayer;
  setLayer(layer: CALayer): void;
  bounds(): CGRect;
  setBounds(bounds: CGRect): void;
}
declare const CARenderer: {
  alloc(): CARendererUninitialized;
  class(): CARenderer;  rendererWithMTLTexture_options(tex: any, dict: NSDictionary<any, any> | {[key: string]: any} | null): CARenderer;

}

