interface MSMirrorDataProviderUninitialized<InitializedType = MSMirrorDataProvider> extends NSObjectUninitialized<MSMirrorDataProvider> {}
interface MSMirrorDataProvider extends NSObject, ISMKMirrorDataSource {
  currentArtboardDidChange(): void;
  setNeedsUpdate(): void;
  setNeedsUpdateMetadata(): void;

  connectionController(): SMKMirrorController;
  setConnectionController(connectionController: SMKMirrorController): void;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  documentData(): MSImmutableDocumentData;
  requiresImmediateUpdate(): boolean;
  setRequiresImmediateUpdate(requiresImmediateUpdate: boolean): void;
}
declare const MSMirrorDataProvider: {
  alloc(): MSMirrorDataProviderUninitialized;
  class(): MSMirrorDataProvider;
}

