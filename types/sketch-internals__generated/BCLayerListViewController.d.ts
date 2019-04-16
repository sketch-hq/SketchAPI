interface BCLayerListViewControllerUninitialized<InitializedType = BCLayerListViewController> extends BCOutlineViewControllerUninitialized<BCLayerListViewController> {}
interface BCLayerListViewController extends BCOutlineViewController {
}
declare const BCLayerListViewController: {
  alloc(): BCLayerListViewControllerUninitialized;
  class(): BCLayerListViewController;
}

