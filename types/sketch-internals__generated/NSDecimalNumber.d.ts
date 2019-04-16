interface NSDecimalNumberUninitialized<InitializedType = NSDecimalNumber> extends NSNumberUninitialized<NSDecimalNumber> {
  initWithMantissa_exponent_isNegative(mantissa: number, exponent: number, flag: boolean): InitializedType;
  initWithDecimal(dcm: NSDecimal): InitializedType;
  initWithString(numberValue: NSString | string | null): InitializedType;
  initWithString_locale(numberValue: NSString | string | null, locale: any | null): InitializedType;
}
interface NSDecimalNumber extends NSNumber {
  descriptionWithLocale(locale: any | null): NSString;
  decimalNumberByAdding(decimalNumber: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByAdding_withBehavior(decimalNumber: NSDecimalNumber, behavior: any | null): NSDecimalNumber;
  decimalNumberBySubtracting(decimalNumber: NSDecimalNumber): NSDecimalNumber;
  decimalNumberBySubtracting_withBehavior(decimalNumber: NSDecimalNumber, behavior: any | null): NSDecimalNumber;
  decimalNumberByMultiplyingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByMultiplyingBy_withBehavior(decimalNumber: NSDecimalNumber, behavior: any | null): NSDecimalNumber;
  decimalNumberByDividingBy(decimalNumber: NSDecimalNumber): NSDecimalNumber;
  decimalNumberByDividingBy_withBehavior(decimalNumber: NSDecimalNumber, behavior: any | null): NSDecimalNumber;
  decimalNumberByRaisingToPower(power: NSUInteger): NSDecimalNumber;
  decimalNumberByRaisingToPower_withBehavior(power: NSUInteger, behavior: any | null): NSDecimalNumber;
  decimalNumberByMultiplyingByPowerOf10(power: number): NSDecimalNumber;
  decimalNumberByMultiplyingByPowerOf10_withBehavior(power: number, behavior: any | null): NSDecimalNumber;
  decimalNumberByRoundingAccordingToBehavior(behavior: any | null): NSDecimalNumber;
  compare(decimalNumber: NSNumber | number): NSComparisonResult;

  decimalValue(): NSDecimal;
  objCType(): string;
  doubleValue(): number;
}
declare const NSDecimalNumber: {
  alloc(): NSDecimalNumberUninitialized;
  class(): NSDecimalNumber;  decimalNumberWithMantissa_exponent_isNegative(mantissa: number, exponent: number, flag: boolean): NSDecimalNumber;
  decimalNumberWithDecimal(dcm: NSDecimal): NSDecimalNumber;
  decimalNumberWithString(numberValue: NSString | string | null): NSDecimalNumber;
  decimalNumberWithString_locale(numberValue: NSString | string | null, locale: any | null): NSDecimalNumber;

  zero(): NSDecimalNumber;
  one(): NSDecimalNumber;
  minimumDecimalNumber(): NSDecimalNumber;
  maximumDecimalNumber(): NSDecimalNumber;
  notANumber(): NSDecimalNumber;
  defaultBehavior(): any;
  setDefaultBehavior(defaultBehavior: any): void;

}

