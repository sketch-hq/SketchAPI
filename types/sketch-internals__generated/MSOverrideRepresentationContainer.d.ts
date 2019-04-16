interface MSOverrideRepresentationContainerUninitialized<InitializedType = MSOverrideRepresentationContainer> extends MSOverrideRepresentationBaseUninitialized<MSOverrideRepresentationContainer> {}
interface MSOverrideRepresentationContainer extends MSOverrideRepresentationBase {

  inspectorOverrides(): NSArray<any>;
  selectedOverrides(): NSArray<any>;
}
declare const MSOverrideRepresentationContainer: {
  alloc(): MSOverrideRepresentationContainerUninitialized;
  class(): MSOverrideRepresentationContainer;  rootRepresentationForSymbolInstance(instance: MSSymbolInstance): MSOverrideRepresentationContainer;

}

