interface MSInspectorNumberFormatterUninitialized<InitializedType = MSInspectorNumberFormatter> extends NSNumberFormatterUninitialized<MSInspectorNumberFormatter> {}
interface MSInspectorNumberFormatter extends NSNumberFormatter {
}
declare const MSInspectorNumberFormatter: {
  alloc(): MSInspectorNumberFormatterUninitialized;
  class(): MSInspectorNumberFormatter;  standardFloatFormatter(): MSInspectorNumberFormatter;
  standardIntegerFormatter(): MSInspectorNumberFormatter;
  standardPercentFormatter(): MSInspectorNumberFormatter;
  standardPercentFormatterWithoutPercentSign(): MSInspectorNumberFormatter;

}

