interface _MSImmutableOverrideValueUninitialized<InitializedType = _MSImmutableOverrideValue> extends MSImmutableModelObjectUninitialized<_MSImmutableOverrideValue> {}
interface _MSImmutableOverrideValue extends MSImmutableModelObject {

  overrideName(): NSString;
  value(): NSObject;
}
declare const _MSImmutableOverrideValue: {
  alloc(): _MSImmutableOverrideValueUninitialized;
  class(): _MSImmutableOverrideValue;
}

