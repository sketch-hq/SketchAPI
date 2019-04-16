interface IMSArtboardPresetsViewControllerDelegate {
  artboardPresetsViewController_didSelectPreset(sender: MSArtboardPresetsViewController, preset: MSArtboardPreset): void;
  artboardPresetsViewController_didSelectOrientation(sender: MSArtboardPresetsViewController, orientation: NSPaperOrientation): void;
  showCustomPresetSheet_preset(presetsController: MSArtboardPresetsViewController, preset: MSArtboardPreset | null): void;
}

