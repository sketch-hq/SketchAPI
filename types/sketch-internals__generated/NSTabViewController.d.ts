interface NSTabViewControllerUninitialized<InitializedType = NSTabViewController> extends NSViewControllerUninitialized<NSTabViewController> {}
interface NSTabViewController extends NSViewController, INSTabViewDelegate, INSToolbarDelegate {
  addTabViewItem(tabViewItem: NSTabViewItem): void;
  insertTabViewItem_atIndex(tabViewItem: NSTabViewItem, index: NSInteger): void;
  removeTabViewItem(tabViewItem: NSTabViewItem): void;
  tabViewItemForViewController(viewController: NSViewController): NSTabViewItem;

  tabStyle(): NSTabViewControllerTabStyle;
  setTabStyle(tabStyle: NSTabViewControllerTabStyle): void;
  tabView(): NSTabView;
  setTabView(tabView: NSTabView): void;
  transitionOptions(): NSViewControllerTransitionOptions;
  setTransitionOptions(transitionOptions: NSViewControllerTransitionOptions): void;
  canPropagateSelectedChildViewControllerTitle(): boolean;
  setCanPropagateSelectedChildViewControllerTitle(canPropagateSelectedChildViewControllerTitle: boolean): void;
  tabViewItems(): NSArray<any>;
  setTabViewItems(tabViewItems: NSArray<any> | any[]): void;
  selectedTabViewItemIndex(): NSInteger;
  setSelectedTabViewItemIndex(selectedTabViewItemIndex: NSInteger): void;
}
declare const NSTabViewController: {
  alloc(): NSTabViewControllerUninitialized;
  class(): NSTabViewController;
}

