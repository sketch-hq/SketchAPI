interface MSRenderingDriverCGProfilingUninitialized<InitializedType = MSRenderingDriverCGProfiling> extends MSRenderingDriverCGUninitialized<MSRenderingDriverCGProfiling> {
  initWithDelegate(delegate: any): InitializedType;
}

interface MSRenderingDriverCGProfiling extends MSRenderingDriverCG {
}

declare const MSRenderingDriverCGProfiling: {
  alloc(): MSRenderingDriverCGProfilingUninitialized;
  class(): MSRenderingDriverCGProfiling;
  accessInstanceVariablesDirectly(): boolean;

}

