interface MSPluginsPreferenceTableCellViewUninitialized<InitializedType = MSPluginsPreferenceTableCellView> extends NSTableCellViewUninitialized<MSPluginsPreferenceTableCellView> {}

interface MSPluginsPreferenceTableCellView extends NSTableCellView {

  updateAvailableContainer(): NSView;
  setUpdateAvailableContainer(updateAvailableContainer: NSView): void;
  pluginIncompatibleContainer(): NSView;
  setPluginIncompatibleContainer(pluginIncompatibleContainer: NSView): void;
  updateAvailableInfo(): MSPluginsPreferencesUpdateButton;
  setUpdateAvailableInfo(updateAvailableInfo: MSPluginsPreferencesUpdateButton): void;
  updatePlugin(): NSButton;
  setUpdatePlugin(updatePlugin: NSButton): void;
  pluginUpdating(): NSProgressIndicator;
  setPluginUpdating(pluginUpdating: NSProgressIndicator): void;
  updateAvailableHeightConstraint(): NSLayoutConstraint;
  setUpdateAvailableHeightConstraint(updateAvailableHeightConstraint: NSLayoutConstraint): void;
  incompatiblePluginHeightConstraint(): NSLayoutConstraint;
  setIncompatiblePluginHeightConstraint(incompatiblePluginHeightConstraint: NSLayoutConstraint): void;
  descriptionField(): NSTextField;
  setDescriptionField(descriptionField: NSTextField): void;
  iconView(): MSPluginsPreferenceIconView;
  setIconView(iconView: MSPluginsPreferenceIconView): void;
  tableCellWidthConstraint(): NSLayoutConstraint;
  setTableCellWidthConstraint(tableCellWidthConstraint: NSLayoutConstraint): void;
}

declare const MSPluginsPreferenceTableCellView: {
  alloc(): MSPluginsPreferenceTableCellViewUninitialized;
  class(): MSPluginsPreferenceTableCellView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

