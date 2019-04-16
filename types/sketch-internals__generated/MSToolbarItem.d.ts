interface MSToolbarItemUninitialized<InitializedType = MSToolbarItem> extends NSToolbarItemUninitialized<MSToolbarItem> {
  initWithAction(action: MSAction): InitializedType;
}

interface MSToolbarItem extends NSToolbarItem {
  makeViewForAction(action: MSAction): NSView;
}

declare const MSToolbarItem: {
  alloc(): MSToolbarItemUninitialized;
  class(): MSToolbarItem;
  accessInstanceVariablesDirectly(): boolean;

}

