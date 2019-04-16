interface NSToolbarItemGroupUninitialized<InitializedType = NSToolbarItemGroup> extends NSToolbarItemUninitialized<NSToolbarItemGroup> {}

interface NSToolbarItemGroup extends NSToolbarItem {

  subitems(): NSArray<any>;
  setSubitems(subitems: NSArray<any> | any[]): void;
}

declare const NSToolbarItemGroup: {
  alloc(): NSToolbarItemGroupUninitialized;
  class(): NSToolbarItemGroup;
  accessInstanceVariablesDirectly(): boolean;

}

