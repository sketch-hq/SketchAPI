interface MSImmutableTextStyleUninitialized<InitializedType = MSImmutableTextStyle> extends _MSImmutableTextStyleUninitialized<MSImmutableTextStyle> {}
interface MSImmutableTextStyle extends _MSImmutableTextStyle {

  attributes(): NSDictionary<any, any>;
}
declare const MSImmutableTextStyle: {
  alloc(): MSImmutableTextStyleUninitialized;
  class(): MSImmutableTextStyle;
}

