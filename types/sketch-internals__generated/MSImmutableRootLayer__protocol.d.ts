interface IMSImmutableRootLayer {
  contentBoundsForDocument(doc: MSImmutableDocumentData): NSRect;

  grid(): MSImmutableSimpleGrid;
  layout(): MSImmutableLayoutGrid;
}

