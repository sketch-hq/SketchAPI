interface MSGeneralPreferencePaneUninitialized<InitializedType = MSGeneralPreferencePane> extends MSPreferencePaneUninitialized<MSGeneralPreferencePane> {}
interface MSGeneralPreferencePane extends MSPreferencePane {
  analyticsAction(sender: any): IBAction;
  pickDefaultColorSpace(sender: any): IBAction;

  defaultColorSpaceDescriptionLabel(): NSTextField;
  setDefaultColorSpaceDescriptionLabel(defaultColorSpaceDescriptionLabel: NSTextField): void;
  defaultColorSpacePopUpButton(): NSPopUpButton;
  setDefaultColorSpacePopUpButton(defaultColorSpacePopUpButton: NSPopUpButton): void;
  appearancePreview(): NSImageView;
  setAppearancePreview(appearancePreview: NSImageView): void;
  appAppearanceButton(): NSPopUpButton;
  setAppAppearanceButton(appAppearanceButton: NSPopUpButton): void;
  canvasAppearanceButton(): NSPopUpButton;
  setCanvasAppearanceButton(canvasAppearanceButton: NSPopUpButton): void;
  appAppearanceLabel(): NSTextField;
  setAppAppearanceLabel(appAppearanceLabel: NSTextField): void;
  canvasAppearanceLabel(): NSTextField;
  setCanvasAppearanceLabel(canvasAppearanceLabel: NSTextField): void;
  mainContainerView(): NSView;
  setMainContainerView(mainContainerView: NSView): void;
}
declare const MSGeneralPreferencePane: {
  alloc(): MSGeneralPreferencePaneUninitialized;
  class(): MSGeneralPreferencePane;
}

