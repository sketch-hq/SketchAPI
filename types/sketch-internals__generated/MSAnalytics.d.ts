interface MSAnalyticsUninitialized<InitializedType = MSAnalytics> extends BCSingletonUninitialized<MSAnalytics> {}
interface MSAnalytics extends BCSingleton, IMSActionObserver {
  trackScreenWithName(name: NSString | string): void;
  trackEvent_withValue(event: NSString | string, value: any | null): void;

  isEnabled(): boolean;
  setIsEnabled(isEnabled: boolean): void;
}
declare const MSAnalytics: {
  alloc(): MSAnalyticsUninitialized;
  class(): MSAnalytics;
}

