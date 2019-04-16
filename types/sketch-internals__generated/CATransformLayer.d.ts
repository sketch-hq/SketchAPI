interface CATransformLayerUninitialized<InitializedType = CATransformLayer> extends CALayerUninitialized<CATransformLayer> {}

interface CATransformLayer extends CALayer {
}

declare const CATransformLayer: {
  alloc(): CATransformLayerUninitialized;
  class(): CATransformLayer;
  layer(): CATransformLayer;
  defaultValueForKey(key: NSString | string): any;
  needsDisplayForKey(key: NSString | string): boolean;
  defaultActionForKey(event: NSString | string): any;
  layerWithRemoteClientId(client_id: number): CALayer;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

