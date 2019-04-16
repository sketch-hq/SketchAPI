interface MSAnalyticsUninitialized<InitializedType = MSAnalytics> extends BCSingletonUninitialized<MSAnalytics> {}

interface MSAnalytics extends BCSingleton, IMSActionObserver {
  trackScreenWithName(name: NSString | string): void;
  trackEvent_withValue(event: NSString | string, value: any | null): void;
  actionController_willBeginActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didFinishActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didInstantActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;

  isEnabled(): boolean;
  setIsEnabled(isEnabled: boolean): void;
}

declare const MSAnalytics: {
  alloc(): MSAnalyticsUninitialized;
  class(): MSAnalytics;
  sharedInstance(): MSAnalytics;
  accessInstanceVariablesDirectly(): boolean;

}

