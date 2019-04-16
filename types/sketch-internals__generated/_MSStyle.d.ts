interface _MSStyleUninitialized<InitializedType = _MSStyle> extends MSModelObjectUninitialized<_MSStyle> {}

interface _MSStyle extends MSModelObject {
  addStyleBorder(value: MSStyleBorder): void;
  addStyleBorders(borders: NSArray<any> | any[]): void;
  insertStyleBorder_atIndex(value: MSStyleBorder, index: NSUInteger): void;
  insertStyleBorder_beforeStyleBorder(value: MSStyleBorder, after: MSStyleBorder | null): void;
  insertStyleBorders_beforeStyleBorder(values: NSArray<any> | any[], before: MSStyleBorder | null): void;
  insertStyleBorder_afterStyleBorder(value: MSStyleBorder, after: MSStyleBorder | null): void;
  insertStyleBorders_afterStyleBorder(values: NSArray<any> | any[], after: MSStyleBorder | null): void;
  removeStyleBorder(value: MSStyleBorder): void;
  removeStyleBorderAtIndex(index: NSUInteger): void;
  removeStyleBordersAtIndexes(indexes: NSIndexSet): void;
  removeAllStyleBorders(): void;
  moveStyleBorderIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addStyleFill(value: MSStyleFill): void;
  addStyleFills(fills: NSArray<any> | any[]): void;
  insertStyleFill_atIndex(value: MSStyleFill, index: NSUInteger): void;
  insertStyleFill_beforeStyleFill(value: MSStyleFill, after: MSStyleFill | null): void;
  insertStyleFills_beforeStyleFill(values: NSArray<any> | any[], before: MSStyleFill | null): void;
  insertStyleFill_afterStyleFill(value: MSStyleFill, after: MSStyleFill | null): void;
  insertStyleFills_afterStyleFill(values: NSArray<any> | any[], after: MSStyleFill | null): void;
  removeStyleFill(value: MSStyleFill): void;
  removeStyleFillAtIndex(index: NSUInteger): void;
  removeStyleFillsAtIndexes(indexes: NSIndexSet): void;
  removeAllStyleFills(): void;
  moveStyleFillIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addStyleInnerShadow(value: MSStyleInnerShadow): void;
  addStyleInnerShadows(innerShadows: NSArray<any> | any[]): void;
  insertStyleInnerShadow_atIndex(value: MSStyleInnerShadow, index: NSUInteger): void;
  insertStyleInnerShadow_beforeStyleInnerShadow(value: MSStyleInnerShadow, after: MSStyleInnerShadow | null): void;
  insertStyleInnerShadows_beforeStyleInnerShadow(values: NSArray<any> | any[], before: MSStyleInnerShadow | null): void;
  insertStyleInnerShadow_afterStyleInnerShadow(value: MSStyleInnerShadow, after: MSStyleInnerShadow | null): void;
  insertStyleInnerShadows_afterStyleInnerShadow(values: NSArray<any> | any[], after: MSStyleInnerShadow | null): void;
  removeStyleInnerShadow(value: MSStyleInnerShadow): void;
  removeStyleInnerShadowAtIndex(index: NSUInteger): void;
  removeStyleInnerShadowsAtIndexes(indexes: NSIndexSet): void;
  removeAllStyleInnerShadows(): void;
  moveStyleInnerShadowIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addStyleShadow(value: MSStyleShadow): void;
  addStyleShadows(shadows: NSArray<any> | any[]): void;
  insertStyleShadow_atIndex(value: MSStyleShadow, index: NSUInteger): void;
  insertStyleShadow_beforeStyleShadow(value: MSStyleShadow, after: MSStyleShadow | null): void;
  insertStyleShadows_beforeStyleShadow(values: NSArray<any> | any[], before: MSStyleShadow | null): void;
  insertStyleShadow_afterStyleShadow(value: MSStyleShadow, after: MSStyleShadow | null): void;
  insertStyleShadows_afterStyleShadow(values: NSArray<any> | any[], after: MSStyleShadow | null): void;
  removeStyleShadow(value: MSStyleShadow): void;
  removeStyleShadowAtIndex(index: NSUInteger): void;
  removeStyleShadowsAtIndexes(indexes: NSIndexSet): void;
  removeAllStyleShadows(): void;
  moveStyleShadowIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  endMarkerType(): MSMarkerType;
  setEndMarkerType(endMarkerType: MSMarkerType): void;
  miterLimit(): NSInteger;
  setMiterLimit(miterLimit: NSInteger): void;
  startMarkerType(): MSMarkerType;
  setStartMarkerType(startMarkerType: MSMarkerType): void;
  windingRule(): NSWindingRule;
  setWindingRule(windingRule: NSWindingRule): void;
  blur(): MSStyleBlur;
  setBlur(blur: MSStyleBlur): void;
  borderOptions(): MSStyleBorderOptions;
  setBorderOptions(borderOptions: MSStyleBorderOptions): void;
  borders(): NSArray<any>;
  setBorders(borders: NSArray<any> | any[]): void;
  colorControls(): MSStyleColorControls;
  setColorControls(colorControls: MSStyleColorControls): void;
  contextSettings(): MSGraphicsContextSettings;
  setContextSettings(contextSettings: MSGraphicsContextSettings): void;
  fills(): NSArray<any>;
  setFills(fills: NSArray<any> | any[]): void;
  innerShadows(): NSArray<any>;
  setInnerShadows(innerShadows: NSArray<any> | any[]): void;
  shadows(): NSArray<any>;
  setShadows(shadows: NSArray<any> | any[]): void;
  textStyle(): MSTextStyle;
  setTextStyle(textStyle: MSTextStyle): void;
}

declare const _MSStyle: {
  alloc(): _MSStyleUninitialized;
  class(): _MSStyle;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

