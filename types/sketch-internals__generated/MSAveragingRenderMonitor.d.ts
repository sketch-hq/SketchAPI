interface MSAveragingRenderMonitorUninitialized<InitializedType = MSAveragingRenderMonitor> extends MSRenderMonitorUninitialized<MSAveragingRenderMonitor> {
  initWithUpdateBlock(block: MSAveragingRenderMonitorUpdateBlock): InitializedType;
}
interface MSAveragingRenderMonitor extends MSRenderMonitor {

  start(): BCTime;
  setStart(start: BCTime): void;
  updateTimer(): NSTimer;
  setUpdateTimer(updateTimer: NSTimer): void;
}
declare const MSAveragingRenderMonitor: {
  alloc(): MSAveragingRenderMonitorUninitialized;
  class(): MSAveragingRenderMonitor;
}

