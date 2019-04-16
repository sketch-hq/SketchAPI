interface MSAttributedStringUninitialized<InitializedType = MSAttributedString> extends NSObjectUninitialized<MSAttributedString> {
  initWithAttributedString_colorSpace_convert(attributedString: NSAttributedString, colorSpace: NSColorSpace, convert: boolean): InitializedType;
  initWithAttributedString_documentColorSpace(attributedString: NSAttributedString, colorSpace: NSColorSpace): InitializedType;
}
interface MSAttributedString extends NSObject, IMSCoding, INSCopying {
  attributedStringByReplacingFontNames(fontNames: NSDictionary<any, any> | {[key: string]: any}): MSAttributedString;

  attributedString(): NSAttributedString;
  transformedAttributedString(): NSAttributedString;
  fontDescriptors(): NSSet<any>;
  fontNames(): NSSet<any>;
  unavailableFontNames(): NSSet<any>;
  areRequiredFontsAvailable(): boolean;
  string(): NSString;
}
declare const MSAttributedString: {
  alloc(): MSAttributedStringUninitialized;
  class(): MSAttributedString;  encodeAttributesInDictionary(attrs: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  decodeAttributesInDictionary(attrs: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  isRequiredFontAvailableInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): boolean;
  fontDescriptorInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): NSFontDescriptor;
  fontNameInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): NSString;
  replacementFontDescriptorWithFaceName_size(face: NSString | string, size: CGFloat): NSFontDescriptor;

}

