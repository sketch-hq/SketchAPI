interface NSTableColumnUninitialized<InitializedType = NSTableColumn> extends NSObjectUninitialized<NSTableColumn> {
  initWithIdentifier(identifier: NSUserInterfaceItemIdentifier): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSTableColumn extends NSObject, INSCoding, INSUserInterfaceItemIdentification {
  sizeToFit(): void;
  setResizable(flag: boolean): void;
  isResizable(): boolean;
  dataCellForRow(row: NSInteger): any;

  identifier(): NSUserInterfaceItemIdentifier;
  setIdentifier(identifier: NSUserInterfaceItemIdentifier): void;
  tableView(): NSTableView;
  setTableView(tableView: NSTableView): void;
  width(): CGFloat;
  setWidth(width: CGFloat): void;
  minWidth(): CGFloat;
  setMinWidth(minWidth: CGFloat): void;
  maxWidth(): CGFloat;
  setMaxWidth(maxWidth: CGFloat): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  headerCell(): NSTableHeaderCell;
  setHeaderCell(headerCell: NSTableHeaderCell): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  sortDescriptorPrototype(): NSSortDescriptor;
  setSortDescriptorPrototype(sortDescriptorPrototype: NSSortDescriptor): void;
  resizingMask(): NSTableColumnResizingOptions;
  setResizingMask(resizingMask: NSTableColumnResizingOptions): void;
  headerToolTip(): NSString;
  setHeaderToolTip(headerToolTip: NSString | string): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  dataCell(): any;
  setDataCell(dataCell: any): void;
}
declare const NSTableColumn: {
  alloc(): NSTableColumnUninitialized;
  class(): NSTableColumn;
}

