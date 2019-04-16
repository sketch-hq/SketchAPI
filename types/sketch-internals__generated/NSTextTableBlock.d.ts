interface NSTextTableBlockUninitialized<InitializedType = NSTextTableBlock> extends NSTextBlockUninitialized<NSTextTableBlock> {
  initWithTable_startingRow_rowSpan_startingColumn_columnSpan(table: NSTextTable, row: NSInteger, rowSpan: NSInteger, col: NSInteger, colSpan: NSInteger): InitializedType;
}

interface NSTextTableBlock extends NSTextBlock {

  table(): NSTextTable;
  startingRow(): NSInteger;
  rowSpan(): NSInteger;
  startingColumn(): NSInteger;
  columnSpan(): NSInteger;
}

declare const NSTextTableBlock: {
  alloc(): NSTextTableBlockUninitialized;
  class(): NSTextTableBlock;
  accessInstanceVariablesDirectly(): boolean;

}

