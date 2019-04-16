interface MSTooltipHostingViewUninitialized<InitializedType = MSTooltipHostingView> extends NSViewUninitialized<MSTooltipHostingView> {}

interface MSTooltipHostingView extends NSView {

  toolTipProvider(): NSView;
  setToolTipProvider(toolTipProvider: NSView): void;
}

declare const MSTooltipHostingView: {
  alloc(): MSTooltipHostingViewUninitialized;
  class(): MSTooltipHostingView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

