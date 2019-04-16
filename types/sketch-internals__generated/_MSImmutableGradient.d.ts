interface _MSImmutableGradientUninitialized<InitializedType = _MSImmutableGradient> extends MSImmutableModelObjectUninitialized<_MSImmutableGradient> {}

interface _MSImmutableGradient extends MSImmutableModelObject {

  elipseLength(): CGFloat;
  from(): NSPoint;
  gradientType(): MSGradientType;
  to(): NSPoint;
  stops(): NSArray<any>;
}

declare const _MSImmutableGradient: {
  alloc(): _MSImmutableGradientUninitialized;
  class(): _MSImmutableGradient;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

