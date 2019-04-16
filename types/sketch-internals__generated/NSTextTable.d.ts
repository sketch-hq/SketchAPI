interface NSTextTableUninitialized<InitializedType = NSTextTable> extends NSTextBlockUninitialized<NSTextTable> {}

interface NSTextTable extends NSTextBlock {
  rectForBlock_layoutAtPoint_inRect_textContainer_characterRange(block: NSTextTableBlock, startingPoint: NSPoint, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  boundsRectForBlock_contentRect_inRect_textContainer_characterRange(block: NSTextTableBlock, contentRect: NSRect, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  drawBackgroundForBlock_withFrame_inView_characterRange_layoutManager(block: NSTextTableBlock, frameRect: NSRect, controlView: NSView, charRange: NSRange, layoutManager: NSLayoutManager): void;

  numberOfColumns(): NSUInteger;
  setNumberOfColumns(numberOfColumns: NSUInteger): void;
  layoutAlgorithm(): NSTextTableLayoutAlgorithm;
  setLayoutAlgorithm(layoutAlgorithm: NSTextTableLayoutAlgorithm): void;
  collapsesBorders(): boolean;
  setCollapsesBorders(collapsesBorders: boolean): void;
  hidesEmptyCells(): boolean;
  setHidesEmptyCells(hidesEmptyCells: boolean): void;
}

declare const NSTextTable: {
  alloc(): NSTextTableUninitialized;
  class(): NSTextTable;
  accessInstanceVariablesDirectly(): boolean;

}

