interface MSTextLayerUninitialized<InitializedType = MSTextLayer> extends _MSTextLayerUninitialized<MSTextLayer> {
  initWithAttributedString_documentColorSpace_maxWidth(attributedString: NSAttributedString | null, colorSpace: NSColorSpace, maxWidth: CGFloat): InitializedType;
  initWithFrame_attributes_documentColorSpace_type(aRect: NSRect, attributes: NSDictionary<any, any> | {[key: string]: any} | null, colorSpace: NSColorSpace, behaviourType: BCTextBehaviourType): InitializedType;
}

interface MSTextLayer extends _MSTextLayer, IMSFirstLineTypesetterDelegate, IMSColorConvertible {
  layersByConvertingToOutlines(): NSArray<any>;
  changeFont(sender: any | null): void;
  font(): NSFont;
  shapeToUseForTextOnPath(): MSStyledLayer;
  bezierPathFromGlyphsInBounds(): NSBezierPath;
  pathsWithColorsFromGlyphsInBoundsWithParentGroupSplitByColorAttribute(): NSArray<any>;
  isEmpty(): boolean;
  finishEditing(): void;
  updateNameFromStorage(): void;
  replaceMissingFontsIfNecessary(): void;
  adjustFrameToFit(): void;
  ignoreDelegateNotificationsInBlock(block: BCVoidBlock): void;
  addAttribute_value_forRange(attributeName: NSString | string, value: any | null, range: NSRange): void;
  setAttributes_forRange(attributes: NSDictionary<any, any> | {[key: string]: any} | null, range: NSRange): void;
  makeUppercase(sender: any | null): IBAction;
  makeLowercase(sender: any | null): IBAction;
  setTextTransform_range(textTransform: MSAttributedStringTextTransform, range: NSRange): void;
  changeListType(textList: NSTextList | null): void;
  updateStyleInBlock(block: BCVoidBlock): void;
  syncTextStyleAttributes(): void;
  checkTextBehaviourAndClippingAfterResizeFromCorner_mayClip(corner: BCCorner, mayClip: boolean): void;
  shouldStorePDFPreviews(): boolean;
  PDFPreview(): MSImageData;
  baselineAdjustmentForLayoutManager(layoutManager: NSLayoutManager): CGFloat;
  convertColorsUsing(converter: any): void;

  supportsVerticalAlignment(): boolean;
  previousRectCache(): NSRect;
  setPreviousRectCache(previousRectCache: NSRect): void;
  isEditingText(): boolean;
  setIsEditingText(isEditingText: boolean): void;
  textAlignment(): NSTextAlignment;
  setTextAlignment(textAlignment: NSTextAlignment): void;
  verticalAlignment(): MSTextStyleVerticalAlignment;
  setVerticalAlignment(verticalAlignment: MSTextStyleVerticalAlignment): void;
  characterSpacing(): NSNumber;
  setCharacterSpacing(characterSpacing: NSNumber | number): void;
  fontPostscriptName(): NSString;
  setFontPostscriptName(fontPostscriptName: NSString | string): void;
  styleAttributes(): NSDictionary<any, any>;
  setStyleAttributes(styleAttributes: NSDictionary<any, any> | {[key: string]: any}): void;
  stringValue(): NSString;
  setStringValue(stringValue: NSString | string): void;
  attributedStringValue(): NSAttributedString;
  setAttributedStringValue(attributedStringValue: NSAttributedString): void;
  textColor(): MSColor;
  setTextColor(textColor: MSColor): void;
  editingDelegate(): any;
  setEditingDelegate(editingDelegate: any): void;
}

declare const MSTextLayer: {
  alloc(): MSTextLayerUninitialized;
  class(): MSTextLayer;
  canSetTextAlignmentForLayers(layers: MSLayerArray): boolean;
  setTextAlignment_forLayers(alignment: NSTextAlignment, layers: MSLayerArray): void;
  menuItemStateForAlignment_forLayers(alignment: NSTextAlignment, layers: MSLayerArray): NSInteger;
  canSetTextVerticalAlignmentForLayers(layers: MSLayerArray): boolean;
  setTextVerticalAlignment_forLayers(alignment: MSTextStyleVerticalAlignment, layers: MSLayerArray): void;
  menuItemStateForTextVerticalAlignment_forLayers(alignment: MSTextStyleVerticalAlignment, layers: MSLayerArray): NSInteger;
  maintainTextLayerBaselinesForLayers_inBlock(textLayers: NSArray<any> | any[], block: BCVoidBlock): void;
  defaultValue(): NSString;
}

