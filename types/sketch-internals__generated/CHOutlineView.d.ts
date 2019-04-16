interface CHOutlineViewUninitialized<InitializedType = CHOutlineView> extends NSOutlineViewUninitialized<CHOutlineView> {}
interface CHOutlineView extends NSOutlineView {
}
declare const CHOutlineView: {
  alloc(): CHOutlineViewUninitialized;
  class(): CHOutlineView;
}

