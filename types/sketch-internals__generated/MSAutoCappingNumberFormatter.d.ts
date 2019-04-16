interface MSAutoCappingNumberFormatterUninitialized<InitializedType = MSAutoCappingNumberFormatter> extends MSMathNumberFormatterUninitialized<MSAutoCappingNumberFormatter> {}
interface MSAutoCappingNumberFormatter extends MSMathNumberFormatter {
}
declare const MSAutoCappingNumberFormatter: {
  alloc(): MSAutoCappingNumberFormatterUninitialized;
  class(): MSAutoCappingNumberFormatter;
}

