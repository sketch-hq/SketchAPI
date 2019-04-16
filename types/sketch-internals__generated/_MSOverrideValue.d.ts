interface _MSOverrideValueUninitialized<InitializedType = _MSOverrideValue> extends MSModelObjectUninitialized<_MSOverrideValue> {}
interface _MSOverrideValue extends MSModelObject {

  overrideName(): NSString;
  setOverrideName(overrideName: NSString | string): void;
  value(): NSObject;
  setValue(value: NSObject): void;
}
declare const _MSOverrideValue: {
  alloc(): _MSOverrideValueUninitialized;
  class(): _MSOverrideValue;
}

