interface CARemoteLayerServerUninitialized<InitializedType = CARemoteLayerServer> extends NSObjectUninitialized<CARemoteLayerServer> {}
interface CARemoteLayerServer extends NSObject {

  serverPort(): mach_port_t;
}
declare const CARemoteLayerServer: {
  alloc(): CARemoteLayerServerUninitialized;
  class(): CARemoteLayerServer;  sharedServer(): CARemoteLayerServer;

}

