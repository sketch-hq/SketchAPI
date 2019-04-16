interface MSRulerGuidesUninitialized<InitializedType = MSRulerGuides> extends NSObjectUninitialized<MSRulerGuides> {}
interface MSRulerGuides extends NSObject {
}
declare const MSRulerGuides: {
  alloc(): MSRulerGuidesUninitialized;
  class(): MSRulerGuides;  findHoverGuidesOnPage_mouse_mask_zoomScale(page: MSPage, mouse: NSPoint, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  horizontalGuidesForVerticalRulerOnPage_mask_zoomScale(page: MSPage, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  horizontalGuidesForVerticalRulerOnPage_mask_inRect_zoomScale(page: MSPage, mask: MSSnapMask, rect: NSRect, zoomScale: CGFloat): NSArray<any>;
  verticalGuidesForHorizontalRulerOnPage_mask_zoomScale(page: MSPage, mask: MSSnapMask, zoomScale: CGFloat): NSArray<any>;
  verticalGuidesForHorizontalRulerOnPage_mask_inRect_zoomScale(page: MSPage, mask: MSSnapMask, rect: NSRect, zoomScale: CGFloat): NSArray<any>;

}

