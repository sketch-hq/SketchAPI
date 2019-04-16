interface MSZoomActionsUninitialized<InitializedType = MSZoomActions> extends MSActionGroupUninitialized<MSZoomActions> {}

interface MSZoomActions extends MSActionGroup {
}

declare const MSZoomActions: {
  alloc(): MSZoomActionsUninitialized;
  class(): MSZoomActions;
}

