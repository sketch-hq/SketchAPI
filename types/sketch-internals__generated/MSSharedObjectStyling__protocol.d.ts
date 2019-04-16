interface IMSSharedObjectStyling {
  generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock(menuItem: NSMenuItem, colorSpace: NSColorSpace, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForPopup_backingScale_completionBlock(cell: NSPopUpButtonCell, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForManageSheetWithBackingScale_completionBlock(backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): NSImage;
  generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock(size: CGSize, backingScale: CGFloat, shadow: boolean, colorSpace: NSColorSpace, block: MSPreviewGeneratorBlock): void;
  applyStyleToMenuItem_withColorSpace(item: NSMenuItem | null, colorSpace: NSColorSpace | null): void;
}

