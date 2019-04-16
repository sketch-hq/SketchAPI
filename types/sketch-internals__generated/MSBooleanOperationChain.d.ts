interface MSBooleanOperationChainUninitialized<InitializedType = MSBooleanOperationChain> extends NSObjectUninitialized<MSBooleanOperationChain> {
  initWithSubjectPath_maximumElementCount(subject: MSPath, elementCount: NSUInteger): InitializedType;
}
interface MSBooleanOperationChain extends NSObject {
  addClippingPath_forBooleanOperation(subject: MSPath, operation: MSBooleanOperation): MSBooleanOperation;
  resultPath(): MSPath;

  maximumElementCount(): NSUInteger;
}
declare const MSBooleanOperationChain: {
  alloc(): MSBooleanOperationChainUninitialized;
  class(): MSBooleanOperationChain;  booleanOperationChainWithSubjectPath(subject: MSPath): MSBooleanOperationChain;

}

