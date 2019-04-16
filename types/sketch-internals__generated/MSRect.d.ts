interface MSRectUninitialized<InitializedType = MSRect> extends _MSRectUninitialized<MSRect> {
  initWithX_y_width_height(x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat): InitializedType;
  initWithRect(rect: NSRect): InitializedType;
}

interface MSRect extends _MSRect, IMSRect {
  calculateProportions(): void;
  performUpdatesWithUnconstrainedProportions(block: Block): void;
  setRectByIgnoringProportions(newRect: NSRect): void;
  shouldConstrainProportions(): boolean;
  containsPoint(p: NSPoint): boolean;
  isIntegral(): boolean;
  editedFromRect(previousRect: NSRect): void;
  processEditing(): void;
  beginEditing(): void;
  endEditing(): void;
  makeOriginIntegral(): void;
  makeRectIntegral(): void;
  log(): void;

  rect(): NSRect;
  setRect(rect: NSRect): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  origin(): NSPoint;
  setOrigin(origin: NSPoint): void;
  mid(): NSPoint;
  setMid(mid: NSPoint): void;
  primitiveConstrainProportions(): boolean;
  setPrimitiveConstrainProportions(primitiveConstrainProportions: boolean): void;
  proportions(): CGFloat;
  setProportions(proportions: CGFloat): void;
}

declare const MSRect: {
  alloc(): MSRectUninitialized;
  class(): MSRect;
  rectWithX_y_width_height(x: CGFloat, y: CGFloat, w: CGFloat, h: CGFloat): any;
  rectWithRect(rect: NSRect): any;
  rectWithUnionOfRects(rects: NSArray<any> | any[]): any;
}

