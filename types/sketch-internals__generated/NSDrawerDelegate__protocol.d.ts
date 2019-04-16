interface INSDrawerDelegate {
  drawerShouldOpen(sender: NSDrawer): boolean;
  drawerShouldClose(sender: NSDrawer): boolean;
  drawerWillResizeContents_toSize(sender: NSDrawer, contentSize: NSSize): NSSize;
  drawerWillOpen(notification: NSNotification): void;
  drawerDidOpen(notification: NSNotification): void;
  drawerWillClose(notification: NSNotification): void;
  drawerDidClose(notification: NSNotification): void;
}

