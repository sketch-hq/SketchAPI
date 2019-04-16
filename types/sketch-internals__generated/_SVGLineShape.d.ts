interface _SVGLineShapeUninitialized<InitializedType = _SVGLineShape> extends SVGBasicShapeUninitialized<_SVGLineShape> {}
interface _SVGLineShape extends SVGBasicShape {

  x1(): number;
  setX1(x1: number): void;
  x2(): number;
  setX2(x2: number): void;
  y1(): number;
  setY1(y1: number): void;
  y2(): number;
  setY2(y2: number): void;
}
declare const _SVGLineShape: {
  alloc(): _SVGLineShapeUninitialized;
  class(): _SVGLineShape;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

