interface NSScrubberProportionalLayoutUninitialized<InitializedType = NSScrubberProportionalLayout> extends NSScrubberLayoutUninitialized<NSScrubberProportionalLayout> {
  initWithNumberOfVisibleItems(numberOfVisibleItems: NSInteger): InitializedType;
}

interface NSScrubberProportionalLayout extends NSScrubberLayout {

  numberOfVisibleItems(): NSInteger;
  setNumberOfVisibleItems(numberOfVisibleItems: NSInteger): void;
}

declare const NSScrubberProportionalLayout: {
  alloc(): NSScrubberProportionalLayoutUninitialized;
  class(): NSScrubberProportionalLayout;
  layoutAttributesClass(): any;
  accessInstanceVariablesDirectly(): boolean;

}

