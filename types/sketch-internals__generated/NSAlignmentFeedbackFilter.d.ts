interface NSAlignmentFeedbackFilterUninitialized<InitializedType = NSAlignmentFeedbackFilter> extends NSObjectUninitialized<NSAlignmentFeedbackFilter> {}
interface NSAlignmentFeedbackFilter extends NSObject {
  updateWithEvent(event: NSEvent): void;
  updateWithPanRecognizer(panRecognizer: NSPanGestureRecognizer): void;
  alignmentFeedbackTokenForMovementInView_previousPoint_alignedPoint_defaultPoint(view: NSView | null, previousPoint: NSPoint, alignedPoint: NSPoint, defaultPoint: NSPoint): any;
  alignmentFeedbackTokenForHorizontalMovementInView_previousX_alignedX_defaultX(view: NSView | null, previousX: CGFloat, alignedX: CGFloat, defaultX: CGFloat): any;
  alignmentFeedbackTokenForVerticalMovementInView_previousY_alignedY_defaultY(view: NSView | null, previousY: CGFloat, alignedY: CGFloat, defaultY: CGFloat): any;
  performFeedback_performanceTime(alignmentFeedbackTokens: NSArray<any> | any[], performanceTime: NSHapticFeedbackPerformanceTime): void;
}
declare const NSAlignmentFeedbackFilter: {
  alloc(): NSAlignmentFeedbackFilterUninitialized;
  class(): NSAlignmentFeedbackFilter;
  inputEventMask(): NSEventMask;

}

