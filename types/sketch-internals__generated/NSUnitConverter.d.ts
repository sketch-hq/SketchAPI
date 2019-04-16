interface NSUnitConverterUninitialized<InitializedType = NSUnitConverter> extends NSObjectUninitialized<NSUnitConverter> {}
interface NSUnitConverter extends NSObject {
  baseUnitValueFromValue(value: number): number;
  valueFromBaseUnitValue(baseUnitValue: number): number;
}
declare const NSUnitConverter: {
  alloc(): NSUnitConverterUninitialized;
  class(): NSUnitConverter;
}

