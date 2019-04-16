interface _MSImmutableStyleUninitialized<InitializedType = _MSImmutableStyle> extends MSImmutableModelObjectUninitialized<_MSImmutableStyle> {}

interface _MSImmutableStyle extends MSImmutableModelObject {

  endMarkerType(): MSMarkerType;
  miterLimit(): NSInteger;
  startMarkerType(): MSMarkerType;
  windingRule(): NSWindingRule;
  blur(): MSImmutableStyleBlur;
  borderOptions(): MSImmutableStyleBorderOptions;
  borders(): NSArray<any>;
  colorControls(): MSImmutableStyleColorControls;
  contextSettings(): MSImmutableGraphicsContextSettings;
  fills(): NSArray<any>;
  innerShadows(): NSArray<any>;
  shadows(): NSArray<any>;
  textStyle(): MSImmutableTextStyle;
}

declare const _MSImmutableStyle: {
  alloc(): _MSImmutableStyleUninitialized;
  class(): _MSImmutableStyle;
  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;
}

