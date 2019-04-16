interface NSScrollViewUninitialized<InitializedType = NSScrollView> extends NSViewUninitialized<NSScrollView> {}
interface NSScrollView extends NSView, INSTextFinderBarContainer {
  tile(): void;
  reflectScrolledClipView(cView: NSClipView): void;
  scrollWheel(event: NSEvent): void;
  flashScrollers(): void;
  magnifyToFitRect(rect: NSRect): void;
  setMagnification_centeredAtPoint(magnification: CGFloat, point: NSPoint): void;
  addFloatingSubview_forAxis(view: NSView, axis: NSEventGestureAxis): void;

  documentVisibleRect(): NSRect;
  contentSize(): NSSize;
  documentView(): NSView;
  setDocumentView(documentView: NSView): void;
  contentView(): NSClipView;
  setContentView(contentView: NSClipView): void;
  documentCursor(): NSCursor;
  setDocumentCursor(documentCursor: NSCursor): void;
  borderType(): NSBorderType;
  setBorderType(borderType: NSBorderType): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  hasVerticalScroller(): boolean;
  setHasVerticalScroller(hasVerticalScroller: boolean): void;
  hasHorizontalScroller(): boolean;
  setHasHorizontalScroller(hasHorizontalScroller: boolean): void;
  verticalScroller(): NSScroller;
  setVerticalScroller(verticalScroller: NSScroller): void;
  horizontalScroller(): NSScroller;
  setHorizontalScroller(horizontalScroller: NSScroller): void;
  autohidesScrollers(): boolean;
  setAutohidesScrollers(autohidesScrollers: boolean): void;
  horizontalLineScroll(): CGFloat;
  setHorizontalLineScroll(horizontalLineScroll: CGFloat): void;
  verticalLineScroll(): CGFloat;
  setVerticalLineScroll(verticalLineScroll: CGFloat): void;
  lineScroll(): CGFloat;
  setLineScroll(lineScroll: CGFloat): void;
  horizontalPageScroll(): CGFloat;
  setHorizontalPageScroll(horizontalPageScroll: CGFloat): void;
  verticalPageScroll(): CGFloat;
  setVerticalPageScroll(verticalPageScroll: CGFloat): void;
  pageScroll(): CGFloat;
  setPageScroll(pageScroll: CGFloat): void;
  scrollsDynamically(): boolean;
  setScrollsDynamically(scrollsDynamically: boolean): void;
  scrollerStyle(): NSScrollerStyle;
  setScrollerStyle(scrollerStyle: NSScrollerStyle): void;
  scrollerKnobStyle(): NSScrollerKnobStyle;
  setScrollerKnobStyle(scrollerKnobStyle: NSScrollerKnobStyle): void;
  horizontalScrollElasticity(): NSScrollElasticity;
  setHorizontalScrollElasticity(horizontalScrollElasticity: NSScrollElasticity): void;
  verticalScrollElasticity(): NSScrollElasticity;
  setVerticalScrollElasticity(verticalScrollElasticity: NSScrollElasticity): void;
  usesPredominantAxisScrolling(): boolean;
  setUsesPredominantAxisScrolling(usesPredominantAxisScrolling: boolean): void;
  allowsMagnification(): boolean;
  setAllowsMagnification(allowsMagnification: boolean): void;
  magnification(): CGFloat;
  setMagnification(magnification: CGFloat): void;
  maxMagnification(): CGFloat;
  setMaxMagnification(maxMagnification: CGFloat): void;
  minMagnification(): CGFloat;
  setMinMagnification(minMagnification: CGFloat): void;
  automaticallyAdjustsContentInsets(): boolean;
  setAutomaticallyAdjustsContentInsets(automaticallyAdjustsContentInsets: boolean): void;
  contentInsets(): NSEdgeInsets;
  setContentInsets(contentInsets: NSEdgeInsets): void;
  scrollerInsets(): NSEdgeInsets;
  setScrollerInsets(scrollerInsets: NSEdgeInsets): void;
  rulersVisible(): boolean;
  setRulersVisible(rulersVisible: boolean): void;
  hasHorizontalRuler(): boolean;
  setHasHorizontalRuler(hasHorizontalRuler: boolean): void;
  hasVerticalRuler(): boolean;
  setHasVerticalRuler(hasVerticalRuler: boolean): void;
  horizontalRulerView(): NSRulerView;
  setHorizontalRulerView(horizontalRulerView: NSRulerView): void;
  verticalRulerView(): NSRulerView;
  setVerticalRulerView(verticalRulerView: NSRulerView): void;
  findBarPosition(): NSScrollViewFindBarPosition;
  setFindBarPosition(findBarPosition: NSScrollViewFindBarPosition): void;
}
declare const NSScrollView: {
  alloc(): NSScrollViewUninitialized;
  class(): NSScrollView;  frameSizeForContentSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(cSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  contentSizeForFrameSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(fSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  frameSizeForContentSize_hasHorizontalScroller_hasVerticalScroller_borderType(cSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;
  contentSizeForFrameSize_hasHorizontalScroller_hasVerticalScroller_borderType(fSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;

  rulerViewClass(): any;
  setRulerViewClass(rulerViewClass: any): void;

}

