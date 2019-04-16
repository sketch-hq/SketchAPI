interface MSImmutablePageUninitialized<InitializedType = MSImmutablePage> extends _MSImmutablePageUninitialized<MSImmutablePage> {}

interface MSImmutablePage extends _MSImmutablePage, IMSImmutableRootLayer {
  contentBoundsForDocument(doc: MSImmutableDocumentData): NSRect;
  contentBoundsForDocument(doc: MSImmutableDocumentData): NSRect;

  selectedLayerIDs(): NSSet<any>;
  artboards(): NSArray<any>;
  hasArtboards(): boolean;
  symbols(): NSArray<any>;
  grid(): MSImmutableSimpleGrid;
  layout(): MSImmutableLayoutGrid;
}

declare const MSImmutablePage: {
  alloc(): MSImmutablePageUninitialized;
  class(): MSImmutablePage;
}

