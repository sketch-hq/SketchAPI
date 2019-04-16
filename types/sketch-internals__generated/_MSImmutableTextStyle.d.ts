interface _MSImmutableTextStyleUninitialized<InitializedType = _MSImmutableTextStyle> extends MSImmutableModelObjectUninitialized<_MSImmutableTextStyle> {}
interface _MSImmutableTextStyle extends MSImmutableModelObject {

  encodedAttributes(): NSDictionary<any, any>;
  verticalAlignment(): MSTextStyleVerticalAlignment;
}
declare const _MSImmutableTextStyle: {
  alloc(): _MSImmutableTextStyleUninitialized;
  class(): _MSImmutableTextStyle;
}

