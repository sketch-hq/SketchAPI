interface NSSplitViewItemUninitialized<InitializedType = NSSplitViewItem> extends NSObjectUninitialized<NSSplitViewItem> {}
interface NSSplitViewItem extends NSObject, INSAnimatablePropertyContainer, INSCoding {

  behavior(): NSSplitViewItemBehavior;
  viewController(): NSViewController;
  setViewController(viewController: NSViewController): void;
  collapsed(): boolean;
  setCollapsed(collapsed: boolean): void;
  canCollapse(): boolean;
  setCanCollapse(canCollapse: boolean): void;
  collapseBehavior(): NSSplitViewItemCollapseBehavior;
  setCollapseBehavior(collapseBehavior: NSSplitViewItemCollapseBehavior): void;
  minimumThickness(): CGFloat;
  setMinimumThickness(minimumThickness: CGFloat): void;
  maximumThickness(): CGFloat;
  setMaximumThickness(maximumThickness: CGFloat): void;
  preferredThicknessFraction(): CGFloat;
  setPreferredThicknessFraction(preferredThicknessFraction: CGFloat): void;
  holdingPriority(): NSLayoutPriority;
  setHoldingPriority(holdingPriority: NSLayoutPriority): void;
  automaticMaximumThickness(): CGFloat;
  setAutomaticMaximumThickness(automaticMaximumThickness: CGFloat): void;
  springLoaded(): boolean;
  setSpringLoaded(springLoaded: boolean): void;
}
declare const NSSplitViewItem: {
  alloc(): NSSplitViewItemUninitialized;
  class(): NSSplitViewItem;  splitViewItemWithViewController(viewController: NSViewController): NSSplitViewItem;
  sidebarWithViewController(viewController: NSViewController): NSSplitViewItem;
  contentListWithViewController(viewController: NSViewController): NSSplitViewItem;

}

