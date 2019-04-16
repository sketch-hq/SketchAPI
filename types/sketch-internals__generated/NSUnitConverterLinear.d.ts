interface NSUnitConverterLinearUninitialized<InitializedType = NSUnitConverterLinear> extends NSUnitConverterUninitialized<NSUnitConverterLinear> {
  initWithCoefficient(coefficient: number): InitializedType;
  initWithCoefficient_constant(coefficient: number, constant: number): InitializedType;
}

interface NSUnitConverterLinear extends NSUnitConverter, INSSecureCoding {

  coefficient(): number;
  constant(): number;
}

declare const NSUnitConverterLinear: {
  alloc(): NSUnitConverterLinearUninitialized;
  class(): NSUnitConverterLinear;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

