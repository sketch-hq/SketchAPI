interface _SVGMaskUninitialized<InitializedType = _SVGMask> extends SVGGroupElementUninitialized<_SVGMask> {}
interface _SVGMask extends SVGGroupElement {
  primitiveAddMaskingObject(object: any): void;
  primitiveRemoveMaskingObject(object: any): void;

  masking(): NSSet<any>;
  setMasking(masking: NSSet<any>): void;
}
declare const _SVGMask: {
  alloc(): _SVGMaskUninitialized;
  class(): _SVGMask;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

