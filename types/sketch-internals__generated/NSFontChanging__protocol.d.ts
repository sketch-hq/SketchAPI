interface INSFontChanging {
  changeFont(sender: NSFontManager | null): void;
  validModesForFontPanel(fontPanel: NSFontPanel): NSFontPanelModeMask;
}

