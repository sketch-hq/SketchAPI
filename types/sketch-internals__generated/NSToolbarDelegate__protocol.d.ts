interface INSToolbarDelegate {
  toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar(toolbar: NSToolbar, itemIdentifier: NSToolbarItemIdentifier, flag: boolean): NSToolbarItem;
  toolbarDefaultItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarAllowedItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarSelectableItemIdentifiers(toolbar: NSToolbar): NSArray<any>;
  toolbarWillAddItem(notification: NSNotification): void;
  toolbarDidRemoveItem(notification: NSNotification): void;
}

