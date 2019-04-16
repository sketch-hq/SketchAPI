interface MSFeatureAvailabilityUninitialized<InitializedType = MSFeatureAvailability> extends NSObjectUninitialized<MSFeatureAvailability> {}
interface MSFeatureAvailability extends NSObject {
}
declare const MSFeatureAvailability: {
  alloc(): MSFeatureAvailabilityUninitialized;
  class(): MSFeatureAvailability;  enableFeatureAvailability(): void;

  libraryStylesEnabled(): boolean;
  setLibraryStylesEnabled(libraryStylesEnabled: boolean): void;
  feature14414Enabled(): boolean;
  isComponentsPanelEnabled(): boolean;
  setIsComponentsPanelEnabled(isComponentsPanelEnabled: boolean): void;
  builtInRemoteLibrariesEnabled(): boolean;
  setBuiltInRemoteLibrariesEnabled(builtInRemoteLibrariesEnabled: boolean): void;
  cloudDocumentsEnabled(): boolean;
  setCloudDocumentsEnabled(cloudDocumentsEnabled: boolean): void;
  inferredLayoutEnabled(): boolean;
  setInferredLayoutEnabled(inferredLayoutEnabled: boolean): void;

}

