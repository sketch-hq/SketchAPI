interface _MSFlowConnectionUninitialized<InitializedType = _MSFlowConnection> extends MSModelObjectUninitialized<_MSFlowConnection> {}
interface _MSFlowConnection extends MSModelObject {

  animationType(): NSInteger;
  setAnimationType(animationType: NSInteger): void;
  destinationArtboardID(): NSString;
  setDestinationArtboardID(destinationArtboardID: NSString | string): void;
}
declare const _MSFlowConnection: {
  alloc(): _MSFlowConnectionUninitialized;
  class(): _MSFlowConnection;
}

