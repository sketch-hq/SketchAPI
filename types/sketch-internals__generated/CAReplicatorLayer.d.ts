interface CAReplicatorLayerUninitialized<InitializedType = CAReplicatorLayer> extends CALayerUninitialized<CAReplicatorLayer> {}
interface CAReplicatorLayer extends CALayer {

  instanceCount(): NSInteger;
  setInstanceCount(instanceCount: NSInteger): void;
  preservesDepth(): boolean;
  setPreservesDepth(preservesDepth: boolean): void;
  instanceDelay(): CFTimeInterval;
  setInstanceDelay(instanceDelay: CFTimeInterval): void;
  instanceTransform(): CATransform3D;
  setInstanceTransform(instanceTransform: CATransform3D): void;
  instanceColor(): CGColorRef;
  setInstanceColor(instanceColor: CGColorRef): void;
  instanceRedOffset(): number;
  setInstanceRedOffset(instanceRedOffset: number): void;
  instanceGreenOffset(): number;
  setInstanceGreenOffset(instanceGreenOffset: number): void;
  instanceBlueOffset(): number;
  setInstanceBlueOffset(instanceBlueOffset: number): void;
  instanceAlphaOffset(): number;
  setInstanceAlphaOffset(instanceAlphaOffset: number): void;
}
declare const CAReplicatorLayer: {
  alloc(): CAReplicatorLayerUninitialized;
  class(): CAReplicatorLayer;
}

