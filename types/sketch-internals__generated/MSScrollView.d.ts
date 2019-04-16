interface MSScrollViewUninitialized<InitializedType = MSScrollView> extends NSScrollViewUninitialized<MSScrollView> {}

interface MSScrollView extends NSScrollView {

  allowsScrolling(): boolean;
  setAllowsScrolling(allowsScrolling: boolean): void;
}

declare const MSScrollView: {
  alloc(): MSScrollViewUninitialized;
  class(): MSScrollView;
  frameSizeForContentSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(cSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  contentSizeForFrameSize_horizontalScrollerClass_verticalScrollerClass_borderType_controlSize_scrollerStyle(fSize: NSSize, horizontalScrollerClass: any | null, verticalScrollerClass: any | null, type: NSBorderType, controlSize: NSControlSize, scrollerStyle: NSScrollerStyle): NSSize;
  frameSizeForContentSize_hasHorizontalScroller_hasVerticalScroller_borderType(cSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;
  contentSizeForFrameSize_hasHorizontalScroller_hasVerticalScroller_borderType(fSize: NSSize, hFlag: boolean, vFlag: boolean, type: NSBorderType): NSSize;
  rulerViewClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setRulerViewClass(rulerViewClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

