interface MSTextStyleUninitialized<InitializedType = MSTextStyle> extends _MSTextStyleUninitialized<MSTextStyle> {}

interface MSTextStyle extends _MSTextStyle {
  generatePreviewWithText_imageSize_previewSize_colorSpace_backingScale_completionBlock(text: NSString | string, imageSize: CGSize, previewSize: CGSize, colorSpace: NSColorSpace, backingScale: CGFloat, block: MSPreviewGeneratorBlock | null): void;
  syncOwningTextLayerWithThisStyle(): void;
  updateAttributesWithoutSyncingOwningTextLayer(attributes: NSDictionary<any, any> | {[key: string]: any}): void;
  resetDecodedAttributes(): void;

  attributes(): NSDictionary<any, any>;
  setAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): void;
  isRequiredFontAvailable(): boolean;
  fontPostscriptName(): NSString;
}

declare const MSTextStyle: {
  alloc(): MSTextStyleUninitialized;
  class(): MSTextStyle;
  styleWithAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): MSTextStyle;
}

