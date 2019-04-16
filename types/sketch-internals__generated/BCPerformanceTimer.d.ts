interface BCPerformanceTimerUninitialized<InitializedType = BCPerformanceTimer> extends NSObjectUninitialized<BCPerformanceTimer> {}
interface BCPerformanceTimer extends NSObject {
}
declare const BCPerformanceTimer: {
  alloc(): BCPerformanceTimerUninitialized;
  class(): BCPerformanceTimer;
}

