interface NSFontDescriptorUninitialized<InitializedType = NSFontDescriptor> extends NSObjectUninitialized<NSFontDescriptor> {
  initWithFontAttributes(attributes: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSFontDescriptor extends NSObject, INSCopying, INSSecureCoding {
  objectForKey(attribute: NSFontDescriptorAttributeName): any;
  matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: NSSet<any> | null): NSArray<any>;
  matchingFontDescriptorWithMandatoryKeys(mandatoryKeys: NSSet<any> | null): NSFontDescriptor;
  fontDescriptorByAddingAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSFontDescriptor;
  fontDescriptorWithSymbolicTraits(symbolicTraits: NSFontDescriptorSymbolicTraits): NSFontDescriptor;
  fontDescriptorWithSize(newPointSize: CGFloat): NSFontDescriptor;
  fontDescriptorWithMatrix(matrix: NSAffineTransform): NSFontDescriptor;
  fontDescriptorWithFace(newFace: NSString | string): NSFontDescriptor;
  fontDescriptorWithFamily(newFamily: NSString | string): NSFontDescriptor;

  postscriptName(): NSString;
  pointSize(): CGFloat;
  matrix(): NSAffineTransform;
  symbolicTraits(): NSFontDescriptorSymbolicTraits;
  requiresFontAssetRequest(): boolean;
  fontAttributes(): NSDictionary<any, any>;
}
declare const NSFontDescriptor: {
  alloc(): NSFontDescriptorUninitialized;
  class(): NSFontDescriptor;  fontDescriptorWithFontAttributes(attributes: NSDictionary<any, any> | {[key: string]: any} | null): NSFontDescriptor;
  fontDescriptorWithName_size(fontName: NSString | string, size: CGFloat): NSFontDescriptor;
  fontDescriptorWithName_matrix(fontName: NSString | string, matrix: NSAffineTransform): NSFontDescriptor;

}

