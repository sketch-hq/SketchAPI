declare enum NSFontPanelModeMask {
  NSFontPanelModeMaskFace = 1 << 0,
  NSFontPanelModeMaskSize = 1 << 1,
  NSFontPanelModeMaskCollection = 1 << 2,
  NSFontPanelModeMaskUnderlineEffect = 1<<8,
  NSFontPanelModeMaskStrikethroughEffect = 1<<9,
  NSFontPanelModeMaskTextColorEffect = 1<< 10,
  NSFontPanelModeMaskDocumentColorEffect = 1<<11,
  NSFontPanelModeMaskShadowEffect = 1<<12,
  NSFontPanelModeMaskAllEffects = 0XFFF00,
  NSFontPanelModesMaskStandardModes = 0xFFFF,
  NSFontPanelModesMaskAllModes = 0xFFFFFFFF,
}

