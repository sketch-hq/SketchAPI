interface NSScrubberLayoutUninitialized<InitializedType = NSScrubberLayout> extends NSObjectUninitialized<NSScrubberLayout> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSScrubberLayout extends NSObject, INSCoding {
  prepareLayout(): void;
  layoutAttributesForItemAtIndex(index: NSInteger): NSScrubberLayoutAttributes;
  layoutAttributesForItemsInRect(rect: NSRect): NSSet<any>;
  shouldInvalidateLayoutForChangeFromVisibleRect_toVisibleRect(fromVisibleRect: NSRect, toVisibleRect: NSRect): boolean;

  scrubber(): NSScrubber;
  visibleRect(): NSRect;
  scrubberContentSize(): NSSize;
  shouldInvalidateLayoutForSelectionChange(): boolean;
  shouldInvalidateLayoutForHighlightChange(): boolean;
  automaticallyMirrorsInRightToLeftLayout(): boolean;
}
declare const NSScrubberLayout: {
  alloc(): NSScrubberLayoutUninitialized;
  class(): NSScrubberLayout;
  layoutAttributesClass(): any;

}

