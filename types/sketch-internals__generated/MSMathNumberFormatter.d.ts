interface MSMathNumberFormatterUninitialized<InitializedType = MSMathNumberFormatter> extends NSNumberFormatterUninitialized<MSMathNumberFormatter> {}

interface MSMathNumberFormatter extends NSNumberFormatter {
}

declare const MSMathNumberFormatter: {
  alloc(): MSMathNumberFormatterUninitialized;
  class(): MSMathNumberFormatter;
  localizedStringFromNumber_numberStyle(num: NSNumber | number, nstyle: NSNumberFormatterStyle): NSString;
  defaultFormatterBehavior(): NSNumberFormatterBehavior;
  setDefaultFormatterBehavior(behavior: NSNumberFormatterBehavior): void;
  accessInstanceVariablesDirectly(): boolean;

}

