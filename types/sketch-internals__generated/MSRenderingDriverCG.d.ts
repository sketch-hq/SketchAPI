interface MSRenderingDriverCGUninitialized<InitializedType = MSRenderingDriverCG> extends MSRenderingDriverUninitialized<MSRenderingDriverCG> {}

interface MSRenderingDriverCG extends MSRenderingDriver {
}

declare const MSRenderingDriverCG: {
  alloc(): MSRenderingDriverCGUninitialized;
  class(): MSRenderingDriverCG;
  accessInstanceVariablesDirectly(): boolean;

}

