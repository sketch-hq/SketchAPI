interface NSTableColumnUninitialized<InitializedType = NSTableColumn> extends NSObjectUninitialized<NSTableColumn> {
  initWithIdentifier(identifier: NSUserInterfaceItemIdentifier): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTableColumn extends NSObject, INSCoding, INSUserInterfaceItemIdentification {
  sizeToFit(): void;
  setResizable(flag: boolean): void;
  isResizable(): boolean;
  dataCellForRow(row: NSInteger): any;
  encodeWithCoder(aCoder: NSCoder): void;

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
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

