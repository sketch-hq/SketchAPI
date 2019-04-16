interface MSAddRemoteLibraryActionUninitialized<InitializedType = MSAddRemoteLibraryAction> extends MSActionUninitialized<MSAddRemoteLibraryAction> {}

interface MSAddRemoteLibraryAction extends MSAction {
  addCloudLibraryWithID(shortID: NSString | string): void;
  addAppcastURL(url: NSURL): void;
}

declare const MSAddRemoteLibraryAction: {
  alloc(): MSAddRemoteLibraryActionUninitialized;
  class(): MSAddRemoteLibraryAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

