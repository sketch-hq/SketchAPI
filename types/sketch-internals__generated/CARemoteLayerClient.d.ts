interface CARemoteLayerClientUninitialized<InitializedType = CARemoteLayerClient> extends NSObjectUninitialized<CARemoteLayerClient> {
  initWithServerPort(port: mach_port_t): InitializedType;
}
interface CARemoteLayerClient extends NSObject {
  invalidate(): void;

  clientId(): number;
  layer(): CALayer;
  setLayer(layer: CALayer): void;
}
declare const CARemoteLayerClient: {
  alloc(): CARemoteLayerClientUninitialized;
  class(): CARemoteLayerClient;
}

