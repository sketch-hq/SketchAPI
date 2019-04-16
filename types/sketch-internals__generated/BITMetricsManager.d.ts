interface BITMetricsManagerUninitialized<InitializedType = BITMetricsManager> extends BITHockeyBaseManagerUninitialized<BITMetricsManager> {}

interface BITMetricsManager extends BITHockeyBaseManager {
  trackEventWithName(eventName: NSString | string): void;
  trackEventWithName_properties_measurements(eventName: NSString | string, properties: NSDictionary<any, any> | {[key: string]: any} | null, measurements: NSDictionary<any, any> | {[key: string]: any} | null): void;

  disabled(): boolean;
  setDisabled(disabled: boolean): void;
}

declare const BITMetricsManager: {
  alloc(): BITMetricsManagerUninitialized;
  class(): BITMetricsManager;
  accessInstanceVariablesDirectly(): boolean;

}

