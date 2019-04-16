interface IMSImmutablePathLayer {
  decoratedPathInBoundsInDocument_asSubpath(doc: MSImmutableDocumentData, asSubpath: boolean): MSPath;

  hasMarkers(): boolean;
  style(): MSImmutableStyle;
}

