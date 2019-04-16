declare enum NSWindowStyleMask {
  NSWindowStyleMaskBorderless = 0,
  NSWindowStyleMaskTitled = 1 << 0,
  NSWindowStyleMaskClosable = 1 << 1,
  NSWindowStyleMaskMiniaturizable = 1 << 2,
  NSWindowStyleMaskResizable = 1 << 3,
  NSWindowStyleMaskTexturedBackground = 1 << 8,
  NSWindowStyleMaskUnifiedTitleAndToolbar = 1 << 12,
  NSWindowStyleMaskFullScreen = 1 << 14,
  NSWindowStyleMaskFullSizeContentView = 1 << 15,
  NSWindowStyleMaskUtilityWindow = 1 << 4,
  NSWindowStyleMaskDocModalWindow = 1 << 6,
  NSWindowStyleMaskNonactivatingPanel = 1 << 7,
  NSWindowStyleMaskHUDWindow = 1 << 13,
}

