interface NSDecimalNumberHandlerUninitialized<InitializedType = NSDecimalNumberHandler> extends NSObjectUninitialized<NSDecimalNumberHandler> {
  initWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: NSRoundingMode, scale: number, exact: boolean, overflow: boolean, underflow: boolean, divideByZero: boolean): InitializedType;
}
interface NSDecimalNumberHandler extends NSObject, INSDecimalNumberBehaviors, INSCoding {
}
declare const NSDecimalNumberHandler: {
  alloc(): NSDecimalNumberHandlerUninitialized;
  class(): NSDecimalNumberHandler;  decimalNumberHandlerWithRoundingMode_scale_raiseOnExactness_raiseOnOverflow_raiseOnUnderflow_raiseOnDivideByZero(roundingMode: NSRoundingMode, scale: number, exact: boolean, overflow: boolean, underflow: boolean, divideByZero: boolean): NSDecimalNumberHandler;

  defaultDecimalNumberHandler(): NSDecimalNumberHandler;

}

