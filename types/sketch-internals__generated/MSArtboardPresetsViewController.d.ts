interface MSArtboardPresetsViewControllerUninitialized<InitializedType = MSArtboardPresetsViewController> extends NSViewControllerUninitialized<MSArtboardPresetsViewController> {}
interface MSArtboardPresetsViewController extends NSViewController, IBCPopoverDelegate {
  categoryForPreset(preset: MSArtboardPreset): MSArtboardPresetsCategory;
  addUserPreset(newPreset: MSArtboardPreset): void;

  presetStore(): MSArtboardPresetStore;
  setPresetStore(presetStore: MSArtboardPresetStore): void;
  categories(): NSArray<any>;
  selectedCategory(): MSArtboardPresetsCategory;
  setSelectedCategory(selectedCategory: MSArtboardPresetsCategory): void;
  orientation(): NSPaperOrientation;
  setOrientation(orientation: NSPaperOrientation): void;
  extraPresets(): NSArray<any>;
  setExtraPresets(extraPresets: NSArray<any> | any[]): void;
  selectedPresetSize(): NSSize;
  setSelectedPresetSize(selectedPresetSize: NSSize): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSArtboardPresetsViewController: {
  alloc(): MSArtboardPresetsViewControllerUninitialized;
  class(): MSArtboardPresetsViewController;
}

