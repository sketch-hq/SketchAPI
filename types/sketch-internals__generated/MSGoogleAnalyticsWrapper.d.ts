interface MSGoogleAnalyticsWrapperUninitialized<InitializedType = MSGoogleAnalyticsWrapper> extends NSObjectUninitialized<MSGoogleAnalyticsWrapper> {}
interface MSGoogleAnalyticsWrapper extends NSObject, IWebFrameLoadDelegate, IWebResourceLoadDelegate, IWebUIDelegate {
  start(): void;
  stop(): void;
  sendAction_arguments(action: NSString | string, arguments: NSArray<any> | any[]): void;
}
declare const MSGoogleAnalyticsWrapper: {
  alloc(): MSGoogleAnalyticsWrapperUninitialized;
  class(): MSGoogleAnalyticsWrapper;
}

