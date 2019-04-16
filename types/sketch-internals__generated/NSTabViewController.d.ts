interface NSTabViewControllerUninitialized<InitializedType = NSTabViewController> extends NSViewControllerUninitialized<NSTabViewController> {}

interface NSTabViewController extends NSViewController, INSTabViewDelegate, INSToolbarDelegate {
  addTabViewItem(tabViewItem: NSTabViewItem): void;
  insertTabViewItem_atIndex(tabViewItem: NSTabViewItem, index: NSInteger): void;
  removeTabViewItem(tabViewItem: NSTabViewItem): void;
  tabViewItemForViewController(viewController: NSViewController): NSTabViewItem;
  tabView_shouldSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;
  tabView_willSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabView_didSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidChangeNumberOfTabViewItems(tabView: NSTabView): void;
  toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(toolbar: NSToolbar, itemIdentifier: NSToolbarItemIdentifier, flag: boolean): NSToolbarItem;
  toolbarDefaultItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarAllowedItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarSelectableItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarWillAddItem(notification: NSNotification): void;
  toolbarDidRemoveItem(notification: NSNotification): void;

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

