interface MSDataOverrideUninitialized<InitializedType = MSDataOverride> extends NSObjectUninitialized<MSDataOverride> {
  initWithOverride_symbolInstance(availableOverride: MSAvailableOverride, symbolInstance: MSSymbolInstance): InitializedType;
}
interface MSDataOverride extends NSObject {

  availableOverride(): MSAvailableOverride;
  symbolInstance(): MSSymbolInstance;
  affectedLayer(): MSImmutableStyledLayer;
  overrideIdentifier(): NSString;
}
declare const MSDataOverride: {
  alloc(): MSDataOverrideUninitialized;
  class(): MSDataOverride;
}

