interface MSGroupLayoutUninitialized<InitializedType = MSGroupLayout> extends _MSGroupLayoutUninitialized<MSGroupLayout> {}
interface MSGroupLayout extends _MSGroupLayout {
  groupDidResizeFromSize(oldSize: NSSize): void;
  desiredGroupLayerOrder(): NSArray<any>;
  layersToConsiderForGroupBounds(): NSArray<any>;
  fixGeometryWithOptions(resizeOption: MSFixGroupGeometryOptions): boolean;
  changeLayout_inBlock(layoutType: MSLayoutChangeType, block: BCVoidBlock): void;
  willChangeLayout(layoutType: MSLayoutChangeType): any;
  didChangeLayout_info(layoutType: MSLayoutChangeType, info: any | null): void;
  shouldResizeToFitBounds(rect: NSRect): boolean;

  group(): MSLayerGroup;
  isInferredLayout(): boolean;
}
declare const MSGroupLayout: {
  alloc(): MSGroupLayoutUninitialized;
  class(): MSGroupLayout;
}

