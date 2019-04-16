interface MSDataTableViewUninitialized<InitializedType = MSDataTableView> extends BCKeyEventActionTableViewUninitialized<MSDataTableView> {}
interface MSDataTableView extends BCKeyEventActionTableView {
}
declare const MSDataTableView: {
  alloc(): MSDataTableViewUninitialized;
  class(): MSDataTableView;
}

