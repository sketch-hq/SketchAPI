interface MSPluginsPreferencePaneUninitialized<InitializedType = MSPluginsPreferencePane> extends MSPreferencePaneUninitialized<MSPluginsPreferencePane> {}

interface MSPluginsPreferencePane extends MSPreferencePane, INSTextFieldDelegate {
  getPlugins(sender: any): IBAction;
  togglePluginEnabled(sender: any): IBAction;
  tableContextMenu(sender: any): IBAction;
  openPluginsFolder(sender: any): IBAction;
  installPluginUpdates(sender: any): IBAction;
  installPluginUpdate(sender: any): IBAction;
  openPluginURL(sender: any): IBAction;
  activateSearchField(sender: any): IBAction;
  textField_textView_candidatesForSelectedRange(textField: NSTextField, textView: NSTextView, selectedRange: NSRange): NSArray<any>;
  textField_textView_candidates_forSelectedRange(textField: NSTextField, textView: NSTextView, candidates: NSArray<any> | any[], selectedRange: NSRange): NSArray<any>;
  textField_textView_shouldSelectCandidateAtIndex(textField: NSTextField, textView: NSTextView, index: NSUInteger): boolean;

  pluginsArrayController(): NSArrayController;
  setPluginsArrayController(pluginsArrayController: NSArrayController): void;
  pluginSortDescriptors(): NSArray<any>;
  filteredPlugins(): NSArray<any>;
  pluginFilterPredicate(): NSPredicate;
  zeroPluginsImage(): NSImage;
  zeroPluginsTitle(): NSString;
  zeroPluginsTitleFont(): NSFont;
  zeroPluginsText(): NSString;
  filterTextField(): NSSearchField;
  setFilterTextField(filterTextField: NSSearchField): void;
  tableView(): BCKeyEventActionTableView;
  setTableView(tableView: BCKeyEventActionTableView): void;
  getPluginsButton(): NSButton;
  setGetPluginsButton(getPluginsButton: NSButton): void;
  contextMenuControl(): NSControl;
  setContextMenuControl(contextMenuControl: NSControl): void;
  contextMenu(): NSMenu;
  setContextMenu(contextMenu: NSMenu): void;
  spyglassFilterButton(): NSButton;
  setSpyglassFilterButton(spyglassFilterButton: NSButton): void;
  enableUpdateAllButton(): boolean;
  setEnableUpdateAllButton(enableUpdateAllButton: boolean): void;
}

declare const MSPluginsPreferencePane: {
  alloc(): MSPluginsPreferencePaneUninitialized;
  class(): MSPluginsPreferencePane;
  openWithPluginToHighlight(pluginIdentifier: NSString | string): void;
  identifier(): NSString;
  title(): NSString;
  toolbarIcon(): NSImage;
  nibName(): NSString;
}

