interface NSRuleEditorUninitialized<InitializedType = NSRuleEditor> extends NSControlUninitialized<NSRuleEditor> {}

interface NSRuleEditor extends NSControl {
  reloadCriteria(): void;
  reloadPredicate(): void;
  predicateForRow(row: NSInteger): NSPredicate;
  subrowIndexesForRow(rowIndex: NSInteger): NSIndexSet;
  criteriaForRow(row: NSInteger): NSArray<any>;
  displayValuesForRow(row: NSInteger): NSArray<any>;
  rowForDisplayValue(displayValue: any): NSInteger;
  rowTypeForRow(rowIndex: NSInteger): NSRuleEditorRowType;
  parentRowForRow(rowIndex: NSInteger): NSInteger;
  addRow(sender: any | null): void;
  insertRowAtIndex_withType_asSubrowOfRow_animate(rowIndex: NSInteger, rowType: NSRuleEditorRowType, parentRow: NSInteger, shouldAnimate: boolean): void;
  setCriteria_andDisplayValues_forRowAtIndex(criteria: NSArray<any> | any[], values: NSArray<any> | any[], rowIndex: NSInteger): void;
  removeRowAtIndex(rowIndex: NSInteger): void;
  removeRowsAtIndexes_includeSubrows(rowIndexes: NSIndexSet, includeSubrows: boolean): void;
  selectRowIndexes_byExtendingSelection(indexes: NSIndexSet, extend: boolean): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  formattingStringsFilename(): NSString;
  setFormattingStringsFilename(formattingStringsFilename: NSString | string): void;
  formattingDictionary(): NSDictionary<any, any>;
  setFormattingDictionary(formattingDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  nestingMode(): NSRuleEditorNestingMode;
  setNestingMode(nestingMode: NSRuleEditorNestingMode): void;
  rowHeight(): CGFloat;
  setRowHeight(rowHeight: CGFloat): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  canRemoveAllRows(): boolean;
  setCanRemoveAllRows(canRemoveAllRows: boolean): void;
  predicate(): NSPredicate;
  numberOfRows(): NSInteger;
  selectedRowIndexes(): NSIndexSet;
  rowClass(): any;
  setRowClass(rowClass: any): void;
  rowTypeKeyPath(): NSString;
  setRowTypeKeyPath(rowTypeKeyPath: NSString | string): void;
  subrowsKeyPath(): NSString;
  setSubrowsKeyPath(subrowsKeyPath: NSString | string): void;
  criteriaKeyPath(): NSString;
  setCriteriaKeyPath(criteriaKeyPath: NSString | string): void;
  displayValuesKeyPath(): NSString;
  setDisplayValuesKeyPath(displayValuesKeyPath: NSString | string): void;
}

declare const NSRuleEditor: {
  alloc(): NSRuleEditorUninitialized;
  class(): NSRuleEditor;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

