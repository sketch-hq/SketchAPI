interface _MSImmutableFlowConnectionUninitialized<InitializedType = _MSImmutableFlowConnection> extends MSImmutableModelObjectUninitialized<_MSImmutableFlowConnection> {}
interface _MSImmutableFlowConnection extends MSImmutableModelObject {

  animationType(): NSInteger;
  destinationArtboardID(): NSString;
}
declare const _MSImmutableFlowConnection: {
  alloc(): _MSImmutableFlowConnectionUninitialized;
  class(): _MSImmutableFlowConnection;
}

