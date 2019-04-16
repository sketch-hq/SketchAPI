interface MSImmutableArtboardGroupUninitialized<InitializedType = MSImmutableArtboardGroup> extends _MSImmutableArtboardGroupUninitialized<MSImmutableArtboardGroup> {}
interface MSImmutableArtboardGroup extends _MSImmutableArtboardGroup, IMSLayerWithBackgroundColor, IMSArtboardGroup, IMSImmutableRootLayer {
  shouldDrawBackgroundInContext(context: MSRenderingContext): boolean;

  preset(): MSArtboardPreset;
}
declare const MSImmutableArtboardGroup: {
  alloc(): MSImmutableArtboardGroupUninitialized;
  class(): MSImmutableArtboardGroup;
}

