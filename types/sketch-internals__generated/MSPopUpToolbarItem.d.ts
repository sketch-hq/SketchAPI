interface MSPopUpToolbarItemUninitialized<InitializedType = MSPopUpToolbarItem> extends MSToolbarItemUninitialized<MSPopUpToolbarItem> {}
interface MSPopUpToolbarItem extends MSToolbarItem {
}
declare const MSPopUpToolbarItem: {
  alloc(): MSPopUpToolbarItemUninitialized;
  class(): MSPopUpToolbarItem;
}

