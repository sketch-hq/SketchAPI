interface IBCSideBarViewControllerDelegate {

  pageListHeight(): CGFloat;
  setPageListHeight(pageListHeight: CGFloat): void;
  pageListCollapsed(): boolean;
  setPageListCollapsed(pageListCollapsed: boolean): void;
}

