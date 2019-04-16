interface INSColorPickingCustom {
  supportsMode(mode: NSColorPanelMode): boolean;
  currentMode(): NSColorPanelMode;
  provideNewView(initialRequest: boolean): NSView;
  setColor(newColor: NSColor): void;
}

