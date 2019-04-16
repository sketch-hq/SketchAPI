interface INSComboBoxDataSource {
  numberOfItemsInComboBox(comboBox: NSComboBox): NSInteger;
  comboBox_objectValueForItemAtIndex(comboBox: NSComboBox, index: NSInteger): any;
  comboBox_indexOfItemWithStringValue(comboBox: NSComboBox, string: NSString | string): NSUInteger;
  comboBox_completedString(comboBox: NSComboBox, string: NSString | string): NSString;
}

