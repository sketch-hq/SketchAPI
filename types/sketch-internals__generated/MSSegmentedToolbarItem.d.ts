interface MSSegmentedToolbarItemUninitialized<InitializedType = MSSegmentedToolbarItem> extends NSToolbarItemGroupUninitialized<MSSegmentedToolbarItem> {
  initWithAction_forToolbar(action: MSActionGroup, forToolbar: boolean): InitializedType;
}
interface MSSegmentedToolbarItem extends NSToolbarItemGroup {
  validateWithAction(action: MSActionGroup): void;
}
declare const MSSegmentedToolbarItem: {
  alloc(): MSSegmentedToolbarItemUninitialized;
  class(): MSSegmentedToolbarItem;
}

