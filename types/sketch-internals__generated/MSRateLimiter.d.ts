interface MSRateLimiterUninitialized<InitializedType = MSRateLimiter> extends NSObjectUninitialized<MSRateLimiter> {
  initWithTarget_action(target: any, action: string): InitializedType;
}
interface MSRateLimiter extends NSObject {
  updateIfNeeded(): void;
  update(): void;

  needsUpdate(): boolean;
  setNeedsUpdate(needsUpdate: boolean): void;
}
declare const MSRateLimiter: {
  alloc(): MSRateLimiterUninitialized;
  class(): MSRateLimiter;
}

