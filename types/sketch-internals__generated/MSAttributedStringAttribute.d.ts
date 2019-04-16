interface MSAttributedStringAttributeUninitialized<InitializedType = MSAttributedStringAttribute> extends NSObjectUninitialized<MSAttributedStringAttribute> {}
interface MSAttributedStringAttribute extends NSObject, IBCJSONEncoding {

  range(): NSRange;
  setRange(range: NSRange): void;
  attributeDictionary(): NSDictionary<any, any>;
  setAttributeDictionary(attributeDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const MSAttributedStringAttribute: {
  alloc(): MSAttributedStringAttributeUninitialized;
  class(): MSAttributedStringAttribute;
}

