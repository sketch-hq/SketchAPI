interface NSDockTileUninitialized<InitializedType = NSDockTile> extends NSObjectUninitialized<NSDockTile> {}
interface NSDockTile extends NSObject {
  display(): void;

  size(): NSSize;
  contentView(): NSView;
  setContentView(contentView: NSView): void;
  showsApplicationBadge(): boolean;
  setShowsApplicationBadge(showsApplicationBadge: boolean): void;
  badgeLabel(): NSString;
  setBadgeLabel(badgeLabel: NSString | string): void;
  owner(): any;
}
declare const NSDockTile: {
  alloc(): NSDockTileUninitialized;
  class(): NSDockTile;
}

