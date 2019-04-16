interface MSStyleUninitialized<InitializedType = MSStyle> extends _MSStyleUninitialized<MSStyle> {}
interface MSStyle extends _MSStyle, IMSSharedObjectInstance, INSCopying {
  multiplyBy(size: CGFloat): void;
  enabledFills(): NSArray<any>;
  enabledBorders(): NSArray<any>;
  enabledShadows(): NSArray<any>;
  enabledInnerShadows(): NSArray<any>;
  firstEnabledBorder(): MSStyleBorder;
  firstEnabledFill(): MSStyleFill;
  firstEnabledShadow(): MSStyleShadow;
  disableAllBorders(): void;
  disableAllFills(): void;
  disableAllShadows(): void;
  disableAllInnerShadows(): void;
  hasTextStyle(): boolean;
  parentLayer(): MSStyledLayer;
  supportsAdvancedBorderSettings(): boolean;
  stylePartsOfType(type: MSStylePartType): NSArray<any>;
  addStylePartOfType(type: MSStylePartType): MSStylePart;

  primitiveTextStyle(): MSTextStyle;
  setPrimitiveTextStyle(primitiveTextStyle: MSTextStyle): void;
  primitiveSharedObjectID(): NSString;
  setPrimitiveSharedObjectID(primitiveSharedObjectID: NSString | string): void;
  hasBlending(): boolean;
  hasMarkers(): boolean;
  hasEnabledBackgroundBlur(): boolean;
  hasEnabledBorder(): boolean;
  hasEnabledFill(): boolean;
  hasEnabledShadow(): boolean;
  hasMoreThanOneEnabledFill(): boolean;
  thickestInnerStroke(): CGFloat;
  thickestStroke(): CGFloat;
}
declare const MSStyle: {
  alloc(): MSStyleUninitialized;
  class(): MSStyle;  styleWithFillColor(color: MSColor): MSStyle;

}

