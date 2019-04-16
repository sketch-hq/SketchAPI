interface NSSplitViewControllerUninitialized<InitializedType = NSSplitViewController> extends NSViewControllerUninitialized<NSSplitViewController> {}
interface NSSplitViewController extends NSViewController, INSSplitViewDelegate, INSUserInterfaceValidations {
  addSplitViewItem(splitViewItem: NSSplitViewItem): void;
  insertSplitViewItem_atIndex(splitViewItem: NSSplitViewItem, index: NSInteger): void;
  removeSplitViewItem(splitViewItem: NSSplitViewItem): void;
  splitViewItemForViewController(viewController: NSViewController): NSSplitViewItem;
  validateUserInterfaceItem(item: any): boolean;
  toggleSidebar(sender: any | null): IBAction;

  splitView(): NSSplitView;
  setSplitView(splitView: NSSplitView): void;
  splitViewItems(): NSArray<any>;
  setSplitViewItems(splitViewItems: NSArray<any> | any[]): void;
  minimumThicknessForInlineSidebars(): CGFloat;
  setMinimumThicknessForInlineSidebars(minimumThicknessForInlineSidebars: CGFloat): void;
}
declare const NSSplitViewController: {
  alloc(): NSSplitViewControllerUninitialized;
  class(): NSSplitViewController;
}

