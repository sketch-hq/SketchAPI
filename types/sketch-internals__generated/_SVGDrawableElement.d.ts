interface _SVGDrawableElementUninitialized<InitializedType = _SVGDrawableElement> extends SVGElementUninitialized<_SVGDrawableElement> {}
interface _SVGDrawableElement extends SVGElement {
  primitiveSetClip(clip: any): void;
  primitiveSetFill(fill: any): void;
  primitiveSetFont(font: any): void;
  primitiveSetMask(mask: any): void;
  primitiveSetStroke(stroke: any): void;

  blendMode(): NSString;
  setBlendMode(blendMode: NSString | string): void;
  clips(): boolean;
  setClips(clips: boolean): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  opacity(): number;
  setOpacity(opacity: number): void;
  rect(): NSRect;
  setRect(rect: NSRect): void;
  transform(): NSAffineTransform;
  setTransform(transform: NSAffineTransform): void;
  clip(): SVGClipPath;
  setClip(clip: SVGClipPath): void;
  fill(): SVGFill;
  setFill(fill: SVGFill): void;
  font(): SVGFont;
  setFont(font: SVGFont): void;
  mask(): SVGMask;
  setMask(mask: SVGMask): void;
  stroke(): SVGStroke;
  setStroke(stroke: SVGStroke): void;
}
declare const _SVGDrawableElement: {
  alloc(): _SVGDrawableElementUninitialized;
  class(): _SVGDrawableElement;  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;

}

