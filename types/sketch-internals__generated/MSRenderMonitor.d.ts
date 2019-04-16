interface MSRenderMonitorUninitialized<InitializedType = MSRenderMonitor> extends NSObjectUninitialized<MSRenderMonitor> {}
interface MSRenderMonitor extends NSObject {
  recordEvent(event: MSRenderMonitorEvent): void;
  recordEvent_timestamp(event: MSRenderMonitorEvent, timestamp: BCTime): void;
  timestampForEvent(event: MSRenderMonitorEvent): BCTime;
  timeIntervalBetweenStartEvent_endEvent(startEvent: MSRenderMonitorEvent, endEvent: MSRenderMonitorEvent): NSTimeInterval;
  registerHook_forEvent(hook: MSRenderMonitorHook, event: MSRenderMonitorEvent): void;

  shouldRemoveWhenDone(): boolean;
  setShouldRemoveWhenDone(shouldRemoveWhenDone: boolean): void;
  shouldClearAllCaches(): boolean;
  setShouldClearAllCaches(shouldClearAllCaches: boolean): void;
  shouldForceFullRedraw(): boolean;
  setShouldForceFullRedraw(shouldForceFullRedraw: boolean): void;
}
declare const MSRenderMonitor: {
  alloc(): MSRenderMonitorUninitialized;
  class(): MSRenderMonitor;
}

