interface MSExportFormatNamingTextFieldCellUninitialized<InitializedType = MSExportFormatNamingTextFieldCell> extends MSTextFieldWithDropDownMenuCellUninitialized<MSExportFormatNamingTextFieldCell> {}

interface MSExportFormatNamingTextFieldCell extends MSTextFieldWithDropDownMenuCell {
}

declare const MSExportFormatNamingTextFieldCell: {
  alloc(): MSExportFormatNamingTextFieldCellUninitialized;
  class(): MSExportFormatNamingTextFieldCell;
}

