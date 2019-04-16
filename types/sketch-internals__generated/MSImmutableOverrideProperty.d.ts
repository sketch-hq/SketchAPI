interface MSImmutableOverridePropertyUninitialized<InitializedType = MSImmutableOverrideProperty> extends _MSImmutableOverridePropertyUninitialized<MSImmutableOverrideProperty> {}

interface MSImmutableOverrideProperty extends _MSImmutableOverrideProperty {

  displayOrder(): NSUInteger;
}

declare const MSImmutableOverrideProperty: {
  alloc(): MSImmutableOverridePropertyUninitialized;
  class(): MSImmutableOverrideProperty;
}

