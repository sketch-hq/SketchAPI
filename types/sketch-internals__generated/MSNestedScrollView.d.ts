interface MSNestedScrollViewUninitialized<InitializedType = MSNestedScrollView> extends NSScrollViewUninitialized<MSNestedScrollView> {}

interface MSNestedScrollView extends NSScrollView {
}

declare const MSNestedScrollView: {
  alloc(): MSNestedScrollViewUninitialized;
  class(): MSNestedScrollView;
  frameSizeForContentSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(cSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  contentSizeForFrameSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(fSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  frameSizeForContentSize_hasHorizontalScroller_hasVerticalScroller_borderType(cSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;
  contentSizeForFrameSize_hasHorizontalScroller_hasVerticalScroller_borderType(fSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;
  rulerViewClass(): any;
  setRulerViewClass(rulerViewClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

