interface MSInspectorNumberFormatterUninitialized<InitializedType = MSInspectorNumberFormatter> extends NSNumberFormatterUninitialized<MSInspectorNumberFormatter> {}

interface MSInspectorNumberFormatter extends NSNumberFormatter {
}

declare const MSInspectorNumberFormatter: {
  alloc(): MSInspectorNumberFormatterUninitialized;
  class(): MSInspectorNumberFormatter;
  standardFloatFormatter(): MSInspectorNumberFormatter;
  standardIntegerFormatter(): MSInspectorNumberFormatter;
  standardPercentFormatter(): MSInspectorNumberFormatter;
  standardPercentFormatterWithoutPercentSign(): MSInspectorNumberFormatter;
  localizedStringFromNumber_numberStyle(num: NSNumber | number, nstyle: NSNumberFormatterStyle): NSString;
  defaultFormatterBehavior(): NSNumberFormatterBehavior;
  setDefaultFormatterBehavior(behavior: NSNumberFormatterBehavior): void;
  accessInstanceVariablesDirectly(): boolean;

}

