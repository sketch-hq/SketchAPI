interface CAEmitterLayerUninitialized<InitializedType = CAEmitterLayer> extends CALayerUninitialized<CAEmitterLayer> {}

interface CAEmitterLayer extends CALayer {

  emitterCells(): NSArray<any>;
  setEmitterCells(emitterCells: NSArray<any> | any[]): void;
  birthRate(): number;
  setBirthRate(birthRate: number): void;
  lifetime(): number;
  setLifetime(lifetime: number): void;
  emitterPosition(): CGPoint;
  setEmitterPosition(emitterPosition: CGPoint): void;
  emitterZPosition(): CGFloat;
  setEmitterZPosition(emitterZPosition: CGFloat): void;
  emitterSize(): CGSize;
  setEmitterSize(emitterSize: CGSize): void;
  emitterDepth(): CGFloat;
  setEmitterDepth(emitterDepth: CGFloat): void;
  emitterShape(): CAEmitterLayerEmitterShape;
  setEmitterShape(emitterShape: CAEmitterLayerEmitterShape): void;
  emitterMode(): CAEmitterLayerEmitterMode;
  setEmitterMode(emitterMode: CAEmitterLayerEmitterMode): void;
  renderMode(): CAEmitterLayerRenderMode;
  setRenderMode(renderMode: CAEmitterLayerRenderMode): void;
  preservesDepth(): boolean;
  setPreservesDepth(preservesDepth: boolean): void;
  velocity(): number;
  setVelocity(velocity: number): void;
  scale(): number;
  setScale(scale: number): void;
  spin(): number;
  setSpin(spin: number): void;
  seed(): number;
  setSeed(seed: number): void;
}

declare const CAEmitterLayer: {
  alloc(): CAEmitterLayerUninitialized;
  class(): CAEmitterLayer;
  layer(): CAEmitterLayer;
  defaultValueForKey(key: NSString | string): any;
  needsDisplayForKey(key: NSString | string): boolean;
  defaultActionForKey(event: NSString | string): any;
  layerWithRemoteClientId(client_id: number): CALayer;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

