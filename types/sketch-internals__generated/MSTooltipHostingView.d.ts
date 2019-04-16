interface MSTooltipHostingViewUninitialized<InitializedType = MSTooltipHostingView> extends NSViewUninitialized<MSTooltipHostingView> {}
interface MSTooltipHostingView extends NSView {

  toolTipProvider(): NSView;
  setToolTipProvider(toolTipProvider: NSView): void;
}
declare const MSTooltipHostingView: {
  alloc(): MSTooltipHostingViewUninitialized;
  class(): MSTooltipHostingView;
}

