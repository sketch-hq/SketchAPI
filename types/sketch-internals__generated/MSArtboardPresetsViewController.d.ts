interface MSArtboardPresetsViewControllerUninitialized<InitializedType = MSArtboardPresetsViewController> extends NSViewControllerUninitialized<MSArtboardPresetsViewController> {}

interface MSArtboardPresetsViewController extends NSViewController, IBCPopoverDelegate {
  categoryForPreset(preset: MSArtboardPreset): MSArtboardPresetsCategory;
  addUserPreset(newPreset: MSArtboardPreset): void;
  minimumPopoverContentViewHeight(popover: BCPopover): CGFloat;
  popoverWillShow(notification: NSNotification): void;
  popoverWillClose(popover: BCPopover): void;
  popoverWindowSizeDidChange(popover: BCPopover): void;
  popoverWindowDidMove(popover: BCPopover): void;
  popoverShouldCloseWhenNewPopoverOpens_newPopover(popover: BCPopover, newPopover: BCPopover): boolean;
  popoverShouldCauseExistingPopoversToClose(popover: BCPopover): boolean;
  popoverShouldAnimateOnContentFrameDidChange(notification: NSNotification): boolean;
  popoverWillReturnUndoManager(popover: BCPopover): NSUndoManager;
  popoverShouldTrackSuperviewOfAttachedToView(popover: BCPopover): boolean;

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
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

