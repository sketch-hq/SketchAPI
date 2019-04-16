interface IMSOverlayRenderingDelegate {
  renderOverlayInRect_context_pageOverlayRenderOptions(rect: NSRect, context: CGContextRef, pageOverlayRenderOptions: MSPageOverlayRenderOptions): void;
  flowItems(pageOverlayRenderOptions: MSPageOverlayRenderOptions): NSSet<any>;
}

