interface BCToolRunningResultUninitialized<InitializedType = BCToolRunningResult> extends NSObjectUninitialized<BCToolRunningResult> {}
interface BCToolRunningResult extends NSObject {

  errorOutput(): NSData;
  exitStatus(): number;
  output(): NSData;
  terminationReason(): NSTaskTerminationReason;
}
declare const BCToolRunningResult: {
  alloc(): BCToolRunningResultUninitialized;
  class(): BCToolRunningResult;
}

