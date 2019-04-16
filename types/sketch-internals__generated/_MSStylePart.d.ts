interface _MSStylePartUninitialized<InitializedType = _MSStylePart> extends MSModelObjectUninitialized<_MSStylePart> {}
interface _MSStylePart extends MSModelObject {

  isEnabled(): boolean;
  setIsEnabled(isEnabled: boolean): void;
}
declare const _MSStylePart: {
  alloc(): _MSStylePartUninitialized;
  class(): _MSStylePart;
}

