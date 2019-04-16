interface NSScrubberFlowLayoutUninitialized<InitializedType = NSScrubberFlowLayout> extends NSScrubberLayoutUninitialized<NSScrubberFlowLayout> {}

interface NSScrubberFlowLayout extends NSScrubberLayout {
  invalidateLayoutForItemsAtIndexes(invalidItemIndexes: NSIndexSet): void;

  itemSpacing(): CGFloat;
  setItemSpacing(itemSpacing: CGFloat): void;
  itemSize(): NSSize;
  setItemSize(itemSize: NSSize): void;
}

declare const NSScrubberFlowLayout: {
  alloc(): NSScrubberFlowLayoutUninitialized;
  class(): NSScrubberFlowLayout;
  layoutAttributesClass(): any;
  accessInstanceVariablesDirectly(): boolean;

}

