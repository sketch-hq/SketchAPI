interface INSComboBoxCellDataSource {
  numberOfItemsInComboBoxCell(comboBoxCell: NSComboBoxCell): NSInteger;
  comboBoxCell_objectValueForItemAtIndex(comboBoxCell: NSComboBoxCell, index: NSInteger): any;
  comboBoxCell_indexOfItemWithStringValue(comboBoxCell: NSComboBoxCell, string: NSString | string): NSUInteger;
  comboBoxCell_completedString(comboBoxCell: NSComboBoxCell, uncompletedString: NSString | string): NSString;
}

