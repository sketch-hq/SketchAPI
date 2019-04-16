interface _SVGTextUninitialized<InitializedType = _SVGText> extends SVGDrawableElementUninitialized<_SVGText> {}
interface _SVGText extends SVGDrawableElement {

  adjustSpacingAndGlyphs(): boolean;
  setAdjustSpacingAndGlyphs(adjustSpacingAndGlyphs: boolean): void;
  anchor(): number;
  setAnchor(anchor: number): void;
  dx(): number;
  setDx(dx: number): void;
  dy(): number;
  setDy(dy: number): void;
  length(): number;
  setLength(length: number): void;
  rotate(): number;
  setRotate(rotate: number): void;
  text(): NSString;
  setText(text: NSString | string): void;
  x(): number;
  setX(x: number): void;
  y(): number;
  setY(y: number): void;
}
declare const _SVGText: {
  alloc(): _SVGTextUninitialized;
  class(): _SVGText;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

