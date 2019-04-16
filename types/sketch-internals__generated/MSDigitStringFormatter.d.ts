interface MSDigitStringFormatterUninitialized<InitializedType = MSDigitStringFormatter> extends NSFormatterUninitialized<MSDigitStringFormatter> {}

interface MSDigitStringFormatter extends NSFormatter {
}

declare const MSDigitStringFormatter: {
  alloc(): MSDigitStringFormatterUninitialized;
  class(): MSDigitStringFormatter;
  isDigitString(string: NSString | string): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

