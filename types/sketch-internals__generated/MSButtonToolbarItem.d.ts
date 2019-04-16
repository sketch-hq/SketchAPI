interface MSButtonToolbarItemUninitialized<InitializedType = MSButtonToolbarItem> extends MSToolbarItemUninitialized<MSButtonToolbarItem> {}
interface MSButtonToolbarItem extends MSToolbarItem {
}
declare const MSButtonToolbarItem: {
  alloc(): MSButtonToolbarItemUninitialized;
  class(): MSButtonToolbarItem;
}

