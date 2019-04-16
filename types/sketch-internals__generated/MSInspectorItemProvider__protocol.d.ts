interface IMSInspectorItemProvider {
  vendItemAtIndex(index: NSUInteger): NSViewController;
  recycleItem(item: NSViewController): void;
  heightOfItemViewAtIndex(index: NSUInteger): CGFloat;
  wantSeparatorAtIndex(index: NSUInteger): boolean;

  numberOfItems(): NSUInteger;
}

