interface _MSOverridePropertyUninitialized<InitializedType = _MSOverrideProperty> extends MSModelObjectUninitialized<_MSOverrideProperty> {}
interface _MSOverrideProperty extends MSModelObject {

  canOverride(): boolean;
  setCanOverride(canOverride: boolean): void;
  overrideName(): NSString;
  setOverrideName(overrideName: NSString | string): void;
}
declare const _MSOverrideProperty: {
  alloc(): _MSOverridePropertyUninitialized;
  class(): _MSOverrideProperty;
}

