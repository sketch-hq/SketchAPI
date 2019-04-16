interface MSImmutableArtboardGroupUninitialized<InitializedType = MSImmutableArtboardGroup> extends _MSImmutableArtboardGroupUninitialized<MSImmutableArtboardGroup> {}

interface MSImmutableArtboardGroup extends _MSImmutableArtboardGroup, IMSLayerWithBackgroundColor, IMSArtboardGroup, IMSImmutableRootLayer {
  shouldDrawBackgroundInContext(context: MSRenderingContext): boolean;
  immutableBackgroundColor(): MSImmutableColor;
  contentBoundsForDocument(doc: MSImmutableDocumentData): NSRect;

  preset(): MSArtboardPreset;
  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
  grid(): MSImmutableSimpleGrid;
  layout(): MSImmutableLayoutGrid;
}

declare const MSImmutableArtboardGroup: {
  alloc(): MSImmutableArtboardGroupUninitialized;
  class(): MSImmutableArtboardGroup;
}

