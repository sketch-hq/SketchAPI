interface NSTextContainerUninitialized<InitializedType = NSTextContainer> extends NSObjectUninitialized<NSTextContainer> {
  initWithSize(size: NSSize): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithContainerSize(aContainerSize: NSSize): InitializedType;
}
interface NSTextContainer extends NSObject, INSCoding, INSTextLayoutOrientationProvider {
  replaceLayoutManager(newLayoutManager: NSLayoutManager): void;
  lineFragmentRectForProposedRect_atIndex_writingDirection_remainingRect(proposedRect: NSRect, characterIndex: NSUInteger, baseWritingDirection: NSWritingDirection, remainingRect: NSRect | null): NSRect;
  lineFragmentRectForProposedRect_sweepDirection_movementDirection_remainingRect(proposedRect: NSRect, sweepDirection: NSLineSweepDirection, movementDirection: NSLineMovementDirection, remainingRect: NSRectPointer | null): NSRect;
  containsPoint(point: NSPoint): boolean;

  layoutManager(): NSLayoutManager;
  setLayoutManager(layoutManager: NSLayoutManager): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  exclusionPaths(): NSArray<any>;
  setExclusionPaths(exclusionPaths: NSArray<any> | any[]): void;
  lineBreakMode(): NSLineBreakMode;
  setLineBreakMode(lineBreakMode: NSLineBreakMode): void;
  lineFragmentPadding(): CGFloat;
  setLineFragmentPadding(lineFragmentPadding: CGFloat): void;
  maximumNumberOfLines(): NSUInteger;
  setMaximumNumberOfLines(maximumNumberOfLines: NSUInteger): void;
  simpleRectangularTextContainer(): boolean;
  widthTracksTextView(): boolean;
  setWidthTracksTextView(widthTracksTextView: boolean): void;
  heightTracksTextView(): boolean;
  setHeightTracksTextView(heightTracksTextView: boolean): void;
  textView(): NSTextView;
  setTextView(textView: NSTextView): void;
  containerSize(): NSSize;
  setContainerSize(containerSize: NSSize): void;
}
declare const NSTextContainer: {
  alloc(): NSTextContainerUninitialized;
  class(): NSTextContainer;
}

