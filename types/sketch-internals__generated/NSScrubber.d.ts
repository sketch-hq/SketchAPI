interface NSScrubberUninitialized<InitializedType = NSScrubber> extends NSViewUninitialized<NSScrubber> {}
interface NSScrubber extends NSView {
  reloadData(): void;
  performSequentialBatchUpdates(updateBlock: Block): void;
  insertItemsAtIndexes(indexes: NSIndexSet): void;
  removeItemsAtIndexes(indexes: NSIndexSet): void;
  reloadItemsAtIndexes(indexes: NSIndexSet): void;
  moveItemAtIndex_toIndex(oldIndex: NSInteger, newIndex: NSInteger): void;
  scrollItemAtIndex_toAlignment(index: NSInteger, alignment: NSScrubberAlignment): void;
  itemViewForItemAtIndex(index: NSInteger): NSScrubberItemView;
  registerClass_forItemIdentifier(itemViewClass: any | null, itemIdentifier: NSUserInterfaceItemIdentifier): void;
  registerNib_forItemIdentifier(nib: NSNib | null, itemIdentifier: NSUserInterfaceItemIdentifier): void;
  makeItemWithIdentifier_owner(itemIdentifier: NSUserInterfaceItemIdentifier, owner: any | null): NSScrubberItemView;

  dataSource(): any;
  setDataSource(dataSource: any): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  scrubberLayout(): NSScrubberLayout;
  setScrubberLayout(scrubberLayout: NSScrubberLayout): void;
  numberOfItems(): NSInteger;
  highlightedIndex(): NSInteger;
  selectedIndex(): NSInteger;
  setSelectedIndex(selectedIndex: NSInteger): void;
  mode(): NSScrubberMode;
  setMode(mode: NSScrubberMode): void;
  itemAlignment(): NSScrubberAlignment;
  setItemAlignment(itemAlignment: NSScrubberAlignment): void;
  continuous(): boolean;
  setContinuous(continuous: boolean): void;
  floatsSelectionViews(): boolean;
  setFloatsSelectionViews(floatsSelectionViews: boolean): void;
  selectionBackgroundStyle(): NSScrubberSelectionStyle;
  setSelectionBackgroundStyle(selectionBackgroundStyle: NSScrubberSelectionStyle): void;
  selectionOverlayStyle(): NSScrubberSelectionStyle;
  setSelectionOverlayStyle(selectionOverlayStyle: NSScrubberSelectionStyle): void;
  showsArrowButtons(): boolean;
  setShowsArrowButtons(showsArrowButtons: boolean): void;
  showsAdditionalContentIndicators(): boolean;
  setShowsAdditionalContentIndicators(showsAdditionalContentIndicators: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  backgroundView(): NSView;
  setBackgroundView(backgroundView: NSView): void;
}
declare const NSScrubber: {
  alloc(): NSScrubberUninitialized;
  class(): NSScrubber;
}

