interface _MSSymbolInstanceUninitialized<InitializedType = _MSSymbolInstance> extends MSStyledLayerUninitialized<_MSSymbolInstance> {}

interface _MSSymbolInstance extends MSStyledLayer {
  addOverrideValue(value: MSOverrideValue): void;
  addOverrideValues(overrideValues: NSArray<any> | any[]): void;
  insertOverrideValue_atIndex(value: MSOverrideValue, index: NSUInteger): void;
  insertOverrideValue_beforeOverrideValue(value: MSOverrideValue, after: MSOverrideValue | null): void;
  insertOverrideValues_beforeOverrideValue(values: NSArray<any> | any[], before: MSOverrideValue | null): void;
  insertOverrideValue_afterOverrideValue(value: MSOverrideValue, after: MSOverrideValue | null): void;
  insertOverrideValues_afterOverrideValue(values: NSArray<any> | any[], after: MSOverrideValue | null): void;
  removeOverrideValue(value: MSOverrideValue): void;
  removeOverrideValueAtIndex(index: NSUInteger): void;
  removeOverrideValuesAtIndexes(indexes: NSIndexSet): void;
  removeAllOverrideValues(): void;
  moveOverrideValueIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  horizontalSpacing(): CGFloat;
  setHorizontalSpacing(horizontalSpacing: CGFloat): void;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  symbolID(): NSString;
  setSymbolID(symbolID: NSString | string): void;
  verticalSpacing(): CGFloat;
  setVerticalSpacing(verticalSpacing: CGFloat): void;
  overrideValues(): NSArray<any>;
  setOverrideValues(overrideValues: NSArray<any> | any[]): void;
}

declare const _MSSymbolInstance: {
  alloc(): _MSSymbolInstanceUninitialized;
  class(): _MSSymbolInstance;
  layerWithImageFromPasteboard(pasteboard: NSPasteboard): _MSSymbolInstance;
  layerWithImageFromFileURL(fileURL: NSURL): _MSSymbolInstance;
  pasteStyleFromPasteboardOnLayers_document(styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleFromPasteboard_onLayers_document(pasteboard: NSPasteboard, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleDict_onLayers_document(style: NSDictionary<any, any> | {[key: string]: any}, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  supportedPasteboardTypesForStyleCopying(): NSArray<any>;
}

