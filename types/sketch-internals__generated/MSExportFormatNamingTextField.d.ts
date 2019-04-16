interface MSExportFormatNamingTextFieldUninitialized<InitializedType = MSExportFormatNamingTextField> extends MSTextFieldWithDropDownMenuUninitialized<MSExportFormatNamingTextField> {}
interface MSExportFormatNamingTextField extends MSTextFieldWithDropDownMenu {

  exportFormats(): NSArray<any>;
  setExportFormats(exportFormats: NSArray<any> | any[]): void;
}
declare const MSExportFormatNamingTextField: {
  alloc(): MSExportFormatNamingTextFieldUninitialized;
  class(): MSExportFormatNamingTextField;
}

