interface _SVGEllipseShapeUninitialized<InitializedType = _SVGEllipseShape> extends SVGBasicShapeUninitialized<_SVGEllipseShape> {}
interface _SVGEllipseShape extends SVGBasicShape {

  cx(): number;
  setCx(cx: number): void;
  cy(): number;
  setCy(cy: number): void;
  rx(): number;
  setRx(rx: number): void;
  ry(): number;
  setRy(ry: number): void;
}
declare const _SVGEllipseShape: {
  alloc(): _SVGEllipseShapeUninitialized;
  class(): _SVGEllipseShape;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

