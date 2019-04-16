interface NSTextBlockUninitialized<InitializedType = NSTextBlock> extends NSObjectUninitialized<NSTextBlock> {
  init(): InitializedType;
}
interface NSTextBlock extends NSObject, INSCoding, INSCopying {
  setValue_type_forDimension(val: CGFloat, type: NSTextBlockValueType, dimension: NSTextBlockDimension): void;
  valueForDimension(dimension: NSTextBlockDimension): CGFloat;
  valueTypeForDimension(dimension: NSTextBlockDimension): NSTextBlockValueType;
  setContentWidth_type(val: CGFloat, type: NSTextBlockValueType): void;
  setWidth_type_forLayer_edge(val: CGFloat, type: NSTextBlockValueType, layer: NSTextBlockLayer, edge: NSRectEdge): void;
  setWidth_type_forLayer(val: CGFloat, type: NSTextBlockValueType, layer: NSTextBlockLayer): void;
  widthForLayer_edge(layer: NSTextBlockLayer, edge: NSRectEdge): CGFloat;
  widthValueTypeForLayer_edge(layer: NSTextBlockLayer, edge: NSRectEdge): NSTextBlockValueType;
  setBorderColor_forEdge(color: NSColor | null, edge: NSRectEdge): void;
  setBorderColor(color: NSColor | null): void;
  borderColorForEdge(edge: NSRectEdge): NSColor;
  rectForLayoutAtPoint_inRect_textContainer_characterRange(startingPoint: NSPoint, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  boundsRectForContentRect_inRect_textContainer_characterRange(contentRect: NSRect, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  drawBackgroundWithFrame_inView_characterRange_layoutManager(frameRect: NSRect, controlView: NSView, charRange: NSRange, layoutManager: NSLayoutManager): void;

  contentWidth(): CGFloat;
  contentWidthValueType(): NSTextBlockValueType;
  verticalAlignment(): NSTextBlockVerticalAlignment;
  setVerticalAlignment(verticalAlignment: NSTextBlockVerticalAlignment): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
}
declare const NSTextBlock: {
  alloc(): NSTextBlockUninitialized;
  class(): NSTextBlock;
}

