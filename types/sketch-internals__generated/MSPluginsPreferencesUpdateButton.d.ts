interface MSPluginsPreferencesUpdateButtonUninitialized<InitializedType = MSPluginsPreferencesUpdateButton> extends NSButtonUninitialized<MSPluginsPreferencesUpdateButton> {}
interface MSPluginsPreferencesUpdateButton extends NSButton {

  tableCellView(): MSPluginsPreferenceTableCellView;
  setTableCellView(tableCellView: MSPluginsPreferenceTableCellView): void;
}
declare const MSPluginsPreferencesUpdateButton: {
  alloc(): MSPluginsPreferencesUpdateButtonUninitialized;
  class(): MSPluginsPreferencesUpdateButton;
}

