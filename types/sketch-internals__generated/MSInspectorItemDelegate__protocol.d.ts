interface IMSInspectorItemDelegate {
  valuesPossiblyChanged(item: NSViewController): void;
  itemDidResize(item: NSViewController): void;
  documentForInspectorItem(section: NSViewController): MSDocument;
  item_wantsSectionToCollapse(item: NSViewController, collapse: boolean): void;
  userInterfaceCacheForItem(item: NSViewController): NSCache;
}

