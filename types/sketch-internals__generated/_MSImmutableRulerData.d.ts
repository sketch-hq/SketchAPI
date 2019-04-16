interface _MSImmutableRulerDataUninitialized<InitializedType = _MSImmutableRulerData> extends MSImmutableModelObjectUninitialized<_MSImmutableRulerData> {}

interface _MSImmutableRulerData extends MSImmutableModelObject {

  base(): NSInteger;
  guides(): NSArray<any>;
}

declare const _MSImmutableRulerData: {
  alloc(): _MSImmutableRulerDataUninitialized;
  class(): _MSImmutableRulerData;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

