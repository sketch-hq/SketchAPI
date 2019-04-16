interface MSImmutableTextLayerUninitialized<InitializedType = MSImmutableTextLayer> extends _MSImmutableTextLayerUninitialized<MSImmutableTextLayer> {}
interface MSImmutableTextLayer extends _MSImmutableTextLayer, IMSFirstLineTypesetterDelegate {
  defaultLineHeight(layoutManager: NSLayoutManager): CGFloat;
  startingPositionOnPath(shape: NSBezierPath): CGFloat;
  textContainerSize(): NSSize;
  shapeToUseForTextOnPathWithParentGroup(parentGroup: MSImmutableLayerGroup): MSImmutableStyledLayer;
  firstUnderlyingShapePathWithParentGroup(parentGroup: MSImmutableLayerGroup): NSBezierPath;
  bezierPathFromGlyphsInBoundsWithParentGroup_layoutManager(parentGroup: MSImmutableLayerGroup | null, layoutManager: NSLayoutManager): NSBezierPath;
  pathsWithColorsFromGlyphsInBoundsWithParentGroupSplitByColorAttribute_layoutManager(parentGroup: MSImmutableLayerGroup | null, layoutManager: NSLayoutManager): NSArray<any>;
  usedFontNames(): NSSet<any>;
  containsUnsafeFonts(): boolean;
  drawingPointForText(): NSPoint;
  createTextStorage(): NSTextStorage;
  textStoragePoolInCache(cache: BCCache): MSTextStoragePool;

  fontSize(): CGFloat;
  stringValue(): NSString;
  attributedStringValue(): NSAttributedString;
  textAlignment(): NSTextAlignment;
  drawingPointForText(): NSPoint;
  textLayout(): MSTextLayout;
  capHeightBounds(): CGRect;
  shouldUseBezierRepresentationForRendering(): boolean;
  isEditingText(): boolean;
}
declare const MSImmutableTextLayer: {
  alloc(): MSImmutableTextLayerUninitialized;
  class(): MSImmutableTextLayer;
}

