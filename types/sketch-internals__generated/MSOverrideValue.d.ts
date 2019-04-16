interface MSOverrideValueUninitialized<InitializedType = MSOverrideValue> extends _MSOverrideValueUninitialized<MSOverrideValue> {
  initWithName_value(name: NSString | string, value: NSObject): InitializedType;
}
interface MSOverrideValue extends _MSOverrideValue {
  addPredecessor(predecessor: MSOverrideValue): void;

  isInherited(): boolean;
  setIsInherited(isInherited: boolean): void;
  predecessor(): MSOverrideValue;
  attributeName(): NSString;
}
declare const MSOverrideValue: {
  alloc(): MSOverrideValueUninitialized;
  class(): MSOverrideValue;
}

