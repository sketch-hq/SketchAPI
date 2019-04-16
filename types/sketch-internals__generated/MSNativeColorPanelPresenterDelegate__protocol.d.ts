interface IMSNativeColorPanelPresenterDelegate {
  colorPanelPresenter_didChangeColor(presenter: MSNativeColorPanelPresenter, color: NSColor): void;
  companionPopoverForColorPanelPresenter(presenter: MSNativeColorPanelPresenter): BCPopover;
}

