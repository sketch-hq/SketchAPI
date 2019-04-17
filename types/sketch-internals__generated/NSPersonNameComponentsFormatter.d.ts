interface NSPersonNameComponentsFormatterUninitialized<InitializedType = NSPersonNameComponentsFormatter> extends NSFormatterUninitialized<NSPersonNameComponentsFormatter> {}

interface NSPersonNameComponentsFormatter extends NSFormatter {
  stringFromPersonNameComponents(components: NSPersonNameComponents): NSString;
  annotatedStringFromPersonNameComponents(components: NSPersonNameComponents): NSAttributedString;
  personNameComponentsFromString(string: NSString | string): NSPersonNameComponents;
  getObjectValue_forString_errorDescription(obj: any, string: NSString | string, error: MOPointer<NSString>): boolean;

  style(): NSPersonNameComponentsFormatterStyle;
  setStyle(style: NSPersonNameComponentsFormatterStyle): void;
  phonetic(): boolean;
  setPhonetic(phonetic: boolean): void;
}

declare const NSPersonNameComponentsFormatter: {
  alloc(): NSPersonNameComponentsFormatterUninitialized;
  class(): NSPersonNameComponentsFormatter;
  localizedStringFromPersonNameComponents_style_options(components: NSPersonNameComponents, nameFormatStyle: NSPersonNameComponentsFormatterStyle, nameOptions: NSPersonNameComponentsFormatterOptions): NSString;
  accessInstanceVariablesDirectly(): boolean;

}

