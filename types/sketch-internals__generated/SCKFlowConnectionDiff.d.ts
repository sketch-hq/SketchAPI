interface SCKFlowConnectionDiffUninitialized<InitializedType = SCKFlowConnectionDiff> extends NSObjectUninitialized<SCKFlowConnectionDiff> {
  initWithObject_comparedTo(object: SCKFlowConnection, otherObject: SCKFlowConnection): InitializedType;
}
interface SCKFlowConnectionDiff extends NSObject, ISCKDiff {

  object(): SCKFlowConnection;
  comparedObject(): SCKFlowConnection;
  attributes(): SCKFlowConnectionAttributes;
}
declare const SCKFlowConnectionDiff: {
  alloc(): SCKFlowConnectionDiffUninitialized;
  class(): SCKFlowConnectionDiff;
}

