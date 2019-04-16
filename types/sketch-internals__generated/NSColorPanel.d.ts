interface NSColorPanelUninitialized<InitializedType = NSColorPanel> extends NSPanelUninitialized<NSColorPanel> {}
interface NSColorPanel extends NSPanel {
  setAction(selector: string | null): void;
  setTarget(target: any | null): void;
  attachColorList(colorList: NSColorList): void;
  detachColorList(colorList: NSColorList): void;
  shouldIgnoreChangeColorMessage(): boolean;
  shouldIgnoreNonInteractiveChangeColorMessage(): boolean;
  setColorWithoutNotifying(color: NSColor): void;

  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  continuous(): boolean;
  setContinuous(continuous: boolean): void;
  showsAlpha(): boolean;
  setShowsAlpha(showsAlpha: boolean): void;
  mode(): NSColorPanelMode;
  setMode(mode: NSColorPanelMode): void;
  color(): NSColor;
  setColor(color: NSColor): void;
  alpha(): CGFloat;
}
declare const NSColorPanel: {
  alloc(): NSColorPanelUninitialized;
  class(): NSColorPanel;  dragColor_withEvent_fromView(color: NSColor, event: NSEvent, sourceView: NSView): boolean;
  setPickerMask(mask: NSColorPanelOptions): void;
  setPickerMode(mode: NSColorPanelMode): void;

  sharedColorPanel(): NSColorPanel;
  sharedColorPanelExists(): boolean;

}

