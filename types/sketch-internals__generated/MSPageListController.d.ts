interface MSPageListControllerUninitialized<InitializedType = MSPageListController> extends MSSidebarListControllerUninitialized<MSPageListController> {}
interface MSPageListController extends MSSidebarListController, IBCOutlineViewDataControllerDataSource, IBCOutlineViewDataControllerDelegate {
}
declare const MSPageListController: {
  alloc(): MSPageListControllerUninitialized;
  class(): MSPageListController;
}

