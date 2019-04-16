interface SCKFlowConnectionUninitialized<InitializedType = SCKFlowConnection> extends SCKObjectUninitialized<SCKFlowConnection> {}

interface SCKFlowConnection extends SCKObject {
  diffComparedTo(object: SCKFlowConnection): SCKFlowConnectionDiff;

  isBackAction(): boolean;
  destinationArtboardID(): SCKObjectID;
  animationType(): NSString;
  layer(): SCKLayer;
}

declare const SCKFlowConnection: {
  alloc(): SCKFlowConnectionUninitialized;
  class(): SCKFlowConnection;
}

