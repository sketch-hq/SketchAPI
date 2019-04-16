interface _SVGRootElementUninitialized<InitializedType = _SVGRootElement> extends SVGGroupElementUninitialized<_SVGRootElement> {}
interface _SVGRootElement extends SVGGroupElement {

  height(): number;
  setHeight(height: number): void;
  width(): number;
  setWidth(width: number): void;
}
declare const _SVGRootElement: {
  alloc(): _SVGRootElementUninitialized;
  class(): _SVGRootElement;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

