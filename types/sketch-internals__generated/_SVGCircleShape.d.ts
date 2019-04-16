interface _SVGCircleShapeUninitialized<InitializedType = _SVGCircleShape> extends SVGBasicShapeUninitialized<_SVGCircleShape> {}
interface _SVGCircleShape extends SVGBasicShape {

  cx(): number;
  setCx(cx: number): void;
  cy(): number;
  setCy(cy: number): void;
  r(): number;
  setR(r: number): void;
}
declare const _SVGCircleShape: {
  alloc(): _SVGCircleShapeUninitialized;
  class(): _SVGCircleShape;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

