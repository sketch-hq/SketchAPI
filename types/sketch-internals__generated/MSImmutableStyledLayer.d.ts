interface MSImmutableStyledLayerUninitialized<InitializedType = MSImmutableStyledLayer> extends _MSImmutableStyledLayerUninitialized<MSImmutableStyledLayer> {}

interface MSImmutableStyledLayer extends _MSImmutableStyledLayer, IMSStyledLayer {
  bezierPathForStartDecorationOnPath(bezier: MOPointer<MSPath>): MSPath;
  bezierPathForEndDecorationOnPath(bezier: MOPointer<MSPath>): MSPath;
  decoratedPathInBoundsInDocument_asSubpath(doc: MSImmutableDocumentData, asSubpath: boolean): MSPath;
  hasMarkers(): boolean;
  prepareDrawingInContext_inBlock(context: MSRenderingContext, block: BCVoidBlock): void;
  fillPathWithDecorations(pathInOut: MOPointer<MSPath>): MSPath;
  fillStyleForDecoratedPath(): MSImmutableStyle;
  strokeStyleForDecoratedPath(): MSImmutableStyle;
  pathWithExporter_border(exporter: SketchSVGExporter, border: MSImmutableStyleBorder | null): MSPath;

  allowsBlur(): boolean;
  shadowsFollowRotation(): boolean;
  shouldRasterize(): boolean;
}

declare const MSImmutableStyledLayer: {
  alloc(): MSImmutableStyledLayerUninitialized;
  class(): MSImmutableStyledLayer;
  cacheDecorations(): void;
}

