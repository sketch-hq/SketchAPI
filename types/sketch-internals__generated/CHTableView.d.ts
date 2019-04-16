interface CHTableViewUninitialized<InitializedType = CHTableView> extends NSTableViewUninitialized<CHTableView> {}
interface CHTableView extends NSTableView {
}
declare const CHTableView: {
  alloc(): CHTableViewUninitialized;
  class(): CHTableView;
}

