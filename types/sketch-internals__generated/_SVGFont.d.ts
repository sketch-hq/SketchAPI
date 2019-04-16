interface _SVGFontUninitialized<InitializedType = _SVGFont> extends SVGElementUninitialized<_SVGFont> {}
interface _SVGFont extends SVGElement {
  primitiveAddUsedByObject(object: any): void;
  primitiveRemoveUsedByObject(object: any): void;

  family(): NSString;
  setFamily(family: NSString | string): void;
  size(): number;
  setSize(size: number): void;
  style(): NSString;
  setStyle(style: NSString | string): void;
  variant(): NSString;
  setVariant(variant: NSString | string): void;
  weight(): number;
  setWeight(weight: number): void;
  usedBy(): NSSet<any>;
  setUsedBy(usedBy: NSSet<any>): void;
}
declare const _SVGFont: {
  alloc(): _SVGFontUninitialized;
  class(): _SVGFont;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

