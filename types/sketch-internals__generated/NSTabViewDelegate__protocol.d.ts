interface INSTabViewDelegate {
  tabView_shouldSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;
  tabView_willSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabView_didSelectTabViewItem(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidChangeNumberOfTabViewItems(tabView: NSTabView): void;
}

