interface _MSStyleReflectionUninitialized<InitializedType = _MSStyleReflection> extends MSStylePartUninitialized<_MSStyleReflection> {}

interface _MSStyleReflection extends MSStylePart {

  distance(): CGFloat;
  setDistance(distance: CGFloat): void;
  strength(): CGFloat;
  setStrength(strength: CGFloat): void;
}

declare const _MSStyleReflection: {
  alloc(): _MSStyleReflectionUninitialized;
  class(): _MSStyleReflection;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

