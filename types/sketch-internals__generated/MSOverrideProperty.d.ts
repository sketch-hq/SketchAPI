interface MSOverridePropertyUninitialized<InitializedType = MSOverrideProperty> extends _MSOverridePropertyUninitialized<MSOverrideProperty> {}

interface MSOverrideProperty extends _MSOverrideProperty {

  displayOrder(): NSUInteger;
  setDisplayOrder(displayOrder: NSUInteger): void;
}

declare const MSOverrideProperty: {
  alloc(): MSOverridePropertyUninitialized;
  class(): MSOverrideProperty;
}

