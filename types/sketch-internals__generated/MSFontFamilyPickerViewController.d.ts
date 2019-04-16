interface MSFontFamilyPickerViewControllerUninitialized<InitializedType = MSFontFamilyPickerViewController> extends NSViewControllerUninitialized<MSFontFamilyPickerViewController> {}
interface MSFontFamilyPickerViewController extends NSViewController, INSTableViewDelegate, INSTableViewDataSource {

  completionBlock(): MSFontFamilyPickerCompletionBlock;
  setCompletionBlock(completionBlock: MSFontFamilyPickerCompletionBlock): void;
  fontList(): MSFontList;
  setFontList(fontList: MSFontList): void;
  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
}
declare const MSFontFamilyPickerViewController: {
  alloc(): MSFontFamilyPickerViewControllerUninitialized;
  class(): MSFontFamilyPickerViewController;
}

