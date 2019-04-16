interface INSDockTilePlugIn {
  setDockTile(dockTile: NSDockTile | null): void;
  dockMenu(): NSMenu;
}

