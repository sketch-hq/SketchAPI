interface MSPluginsPreferencesUpdateButtonUninitialized<InitializedType = MSPluginsPreferencesUpdateButton> extends NSButtonUninitialized<MSPluginsPreferencesUpdateButton> {}

interface MSPluginsPreferencesUpdateButton extends NSButton {

  tableCellView(): MSPluginsPreferenceTableCellView;
  setTableCellView(tableCellView: MSPluginsPreferenceTableCellView): void;
}

declare const MSPluginsPreferencesUpdateButton: {
  alloc(): MSPluginsPreferencesUpdateButtonUninitialized;
  class(): MSPluginsPreferencesUpdateButton;
  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): MSPluginsPreferencesUpdateButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSPluginsPreferencesUpdateButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): MSPluginsPreferencesUpdateButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSPluginsPreferencesUpdateButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): MSPluginsPreferencesUpdateButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

