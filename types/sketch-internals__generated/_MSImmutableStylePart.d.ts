interface _MSImmutableStylePartUninitialized<InitializedType = _MSImmutableStylePart> extends MSImmutableModelObjectUninitialized<_MSImmutableStylePart> {}

interface _MSImmutableStylePart extends MSImmutableModelObject {

  isEnabled(): boolean;
}

declare const _MSImmutableStylePart: {
  alloc(): _MSImmutableStylePartUninitialized;
  class(): _MSImmutableStylePart;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

