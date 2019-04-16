interface MSRenderingDriverCGDebugUninitialized<InitializedType = MSRenderingDriverCGDebug> extends MSRenderingDriverCGUninitialized<MSRenderingDriverCGDebug> {}
interface MSRenderingDriverCGDebug extends MSRenderingDriverCG {
}
declare const MSRenderingDriverCGDebug: {
  alloc(): MSRenderingDriverCGDebugUninitialized;
  class(): MSRenderingDriverCGDebug;
}

