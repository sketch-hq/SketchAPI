interface _MSRulerDataUninitialized<InitializedType = _MSRulerData> extends MSModelObjectUninitialized<_MSRulerData> {}

interface _MSRulerData extends MSModelObject {

  base(): NSInteger;
  setBase(base: NSInteger): void;
  guides(): NSArray<any>;
  setGuides(guides: NSArray<any> | any[]): void;
}

declare const _MSRulerData: {
  alloc(): _MSRulerDataUninitialized;
  class(): _MSRulerData;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

