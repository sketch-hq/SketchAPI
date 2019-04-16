interface MSImmutableStyleFillUninitialized<InitializedType = MSImmutableStyleFill> extends _MSImmutableStyleFillUninitialized<MSImmutableStyleFill> {}

interface MSImmutableStyleFill extends _MSImmutableStyleFill {
  NSImage(): NSImage;
  addSVGAttributes_exporter(attributes: NSMutableArray<any> | any[], exporter: SketchSVGExporter): void;

  hasOpacity(): boolean;
}

declare const MSImmutableStyleFill: {
  alloc(): MSImmutableStyleFillUninitialized;
  class(): MSImmutableStyleFill;
}

