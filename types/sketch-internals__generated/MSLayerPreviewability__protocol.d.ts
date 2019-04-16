interface IMSLayerPreviewability {
  selectedPreviewTemplateImage(): NSImage;
  unselectedPreviewTemplateImage(): NSImage;
  contextualMenuPreviewTemplateImage(): NSImage;

  badgeType(): MSLayerPreviewBadgeType;
}

