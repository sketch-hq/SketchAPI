interface _MSImmutableOverridePropertyUninitialized<InitializedType = _MSImmutableOverrideProperty> extends MSImmutableModelObjectUninitialized<_MSImmutableOverrideProperty> {}
interface _MSImmutableOverrideProperty extends MSImmutableModelObject {

  canOverride(): boolean;
  overrideName(): NSString;
}
declare const _MSImmutableOverrideProperty: {
  alloc(): _MSImmutableOverridePropertyUninitialized;
  class(): _MSImmutableOverrideProperty;
}

