interface FBBezierOperationChainUninitialized<InitializedType = FBBezierOperationChain> extends NSObjectUninitialized<FBBezierOperationChain> {
  initWithBezierPath(sourcePath: FBBezierPath): InitializedType;
  initWithData(data: NSData): InitializedType;
}
interface FBBezierOperationChain extends NSObject {
  appendBezierPath_withOperation(path: FBBezierPath, op: FBBezierPathOperation): void;
  archive(): NSData;
  saveWithName(name: NSString | string): void;
  enumerateWithBlock(block: Block): void;
}
declare const FBBezierOperationChain: {
  alloc(): FBBezierOperationChainUninitialized;
  class(): FBBezierOperationChain;
}

