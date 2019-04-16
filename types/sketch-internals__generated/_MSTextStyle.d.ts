interface _MSTextStyleUninitialized<InitializedType = _MSTextStyle> extends MSModelObjectUninitialized<_MSTextStyle> {}
interface _MSTextStyle extends MSModelObject {

  encodedAttributes(): NSDictionary<any, any>;
  setEncodedAttributes(encodedAttributes: NSDictionary<any, any> | {[key: string]: any}): void;
  verticalAlignment(): MSTextStyleVerticalAlignment;
  setVerticalAlignment(verticalAlignment: MSTextStyleVerticalAlignment): void;
}
declare const _MSTextStyle: {
  alloc(): _MSTextStyleUninitialized;
  class(): _MSTextStyle;
}

