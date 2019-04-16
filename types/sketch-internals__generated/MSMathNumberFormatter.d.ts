interface MSMathNumberFormatterUninitialized<InitializedType = MSMathNumberFormatter> extends NSNumberFormatterUninitialized<MSMathNumberFormatter> {}
interface MSMathNumberFormatter extends NSNumberFormatter {
}
declare const MSMathNumberFormatter: {
  alloc(): MSMathNumberFormatterUninitialized;
  class(): MSMathNumberFormatter;
}

