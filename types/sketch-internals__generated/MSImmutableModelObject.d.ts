interface MSImmutableModelObjectUninitialized<InitializedType = MSImmutableModelObject> extends MSModelObjectCommonUninitialized<MSImmutableModelObject> {
  initWithMutableModelObject(object: MSModelObject): InitializedType;
}
interface MSImmutableModelObject extends MSModelObjectCommon, IMSModelObject, IMSCoding {
  differsFromObject(object: MSImmutableModelObject): boolean;
  shouldDiffSubObjectsForDifferingObject(objet: MSImmutableModelObject): boolean;
  newMutableCounterpart(): any;
  isEqualForDiffToObject(otherObject: any): boolean;
  keysDifferingFromObject(object: MSImmutableModelObject): NSSet<any>;
  encodePropertiesWithCoder(coder: MSBaseArchiver): void;
  decodePropertiesWithUnarchiver(coder: MSBaseUnarchiver): void;
  performInitWithMutableModelObject(object: MSModelObject): void;
  performInitWithUnarchiver(coder: MSBaseUnarchiver): void;

  subObjectsForTreeDiff(): NSArray<any>;
}
declare const MSImmutableModelObject: {
  alloc(): MSImmutableModelObjectUninitialized;
  class(): MSImmutableModelObject;  mutableClass(): any;
  traitsForPropertyName(name: NSString | string): MSPropertyTraits;

}

