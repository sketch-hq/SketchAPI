interface NSScrubberLayoutAttributesUninitialized<InitializedType = NSScrubberLayoutAttributes> extends NSObjectUninitialized<NSScrubberLayoutAttributes> {}
interface NSScrubberLayoutAttributes extends NSObject, INSCopying {

  itemIndex(): NSInteger;
  setItemIndex(itemIndex: NSInteger): void;
  frame(): NSRect;
  setFrame(frame: NSRect): void;
  alpha(): CGFloat;
  setAlpha(alpha: CGFloat): void;
}
declare const NSScrubberLayoutAttributes: {
  alloc(): NSScrubberLayoutAttributesUninitialized;
  class(): NSScrubberLayoutAttributes;  layoutAttributesForItemAtIndex(index: NSInteger): NSScrubberLayoutAttributes;

}

