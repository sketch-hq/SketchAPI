declare enum NSPointerFunctionsOptions {
  NSPointerFunctionsStrongMemory = (0 << 0),
  NSPointerFunctionsZeroingWeakMemory = (1 << 0),
  NSPointerFunctionsMallocMemory = (3 << 0),
  NSPointerFunctionsMachVirtualMemory = (4 << 0),
  NSPointerFunctionsWeakMemory = (5 << 0),
  NSPointerFunctionsObjectPersonality = (0 << 8),
  NSPointerFunctionsOpaquePersonality = (1 << 8),
  NSPointerFunctionsObjectPointerPersonality = (2 << 8),
  NSPointerFunctionsCStringPersonality = (3 << 8),
  NSPointerFunctionsStructPersonality = (4 << 8),
  NSPointerFunctionsIntegerPersonality = (5 << 8),
  NSPointerFunctionsCopyIn = (1 << 16),
}

