interface IBCOutlineViewNode {
  previewIconWithState(state: BCOutlineViewPreviewState): NSImage;
  maskIconWithState(state: BCOutlineViewPreviewState): NSImage;
  badgeMenuConfigurator(): any;

  outlineViewNodeIdentifier(): NSString;
  displayType(): BCOutlineViewDisplayType;
  filterTypeMask(): BCOutlineViewFilterTypeMask;
  nodeName(): NSString;
  setNodeName(nodeName: NSString | string): void;
  isActive(): boolean;
  isEditableInLayerList(): boolean;
  hasBadgedIcon(): boolean;
  badgeImages(): MSTintedImages;
  isExpanded(): boolean;
}

