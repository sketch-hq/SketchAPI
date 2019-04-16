interface _SVGFillUninitialized<InitializedType = _SVGFill> extends SVGElementUninitialized<_SVGFill> {}
interface _SVGFill extends SVGElement {
  primitiveSetGradient(gradient: any): void;
  primitiveSetPattern(pattern: any): void;
  primitiveAddUsedByObject(object: any): void;
  primitiveRemoveUsedByObject(object: any): void;

  color(): MSImmutableColor;
  setColor(color: MSImmutableColor): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  windingrule(): NSString;
  setWindingrule(windingrule: NSString | string): void;
  gradient(): SVGGradient;
  setGradient(gradient: SVGGradient): void;
  pattern(): SVGPattern;
  setPattern(pattern: SVGPattern): void;
  usedBy(): NSSet<any>;
  setUsedBy(usedBy: NSSet<any>): void;
}
declare const _SVGFill: {
  alloc(): _SVGFillUninitialized;
  class(): _SVGFill;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

