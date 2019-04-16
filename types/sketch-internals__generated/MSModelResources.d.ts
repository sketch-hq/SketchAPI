interface MSModelResourcesUninitialized<InitializedType = MSModelResources> extends BCSingletonUninitialized<MSModelResources> {}

interface MSModelResources extends BCSingleton {
  resourcesNeedingMigration(): NSArray<any>;

  noiseImages(): NSArray<any>;
  errorPattern(): NSBitmapImageRep;
}

declare const MSModelResources: {
  alloc(): MSModelResourcesUninitialized;
  class(): MSModelResources;
  sharedInstance(): MSModelResources;
  accessInstanceVariablesDirectly(): boolean;

}

