interface MSLayerListControllerUninitialized<InitializedType = MSLayerListController> extends MSSidebarListControllerUninitialized<MSLayerListController> {}
interface MSLayerListController extends MSSidebarListController, IBCOutlineViewDataControllerDataSource, IBCOutlineViewDataControllerDelegate {
}
declare const MSLayerListController: {
  alloc(): MSLayerListControllerUninitialized;
  class(): MSLayerListController;
}

