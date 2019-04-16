interface _MSDocumentDataUninitialized<InitializedType = _MSDocumentData> extends MSModelObjectUninitialized<_MSDocumentData> {}

interface _MSDocumentData extends MSModelObject {
  addForeignLayerStyle(value: MSForeignLayerStyle): void;
  addForeignLayerStyles(foreignLayerStyles: NSArray<any> | any[]): void;
  insertForeignLayerStyle_atIndex(value: MSForeignLayerStyle, index: NSUInteger): void;
  insertForeignLayerStyle_beforeForeignLayerStyle(value: MSForeignLayerStyle, after: MSForeignLayerStyle | null): void;
  insertForeignLayerStyles_beforeForeignLayerStyle(values: NSArray<any> | any[], before: MSForeignLayerStyle | null): void;
  insertForeignLayerStyle_afterForeignLayerStyle(value: MSForeignLayerStyle, after: MSForeignLayerStyle | null): void;
  insertForeignLayerStyles_afterForeignLayerStyle(values: NSArray<any> | any[], after: MSForeignLayerStyle | null): void;
  removeForeignLayerStyle(value: MSForeignLayerStyle): void;
  removeForeignLayerStyleAtIndex(index: NSUInteger): void;
  removeForeignLayerStylesAtIndexes(indexes: NSIndexSet): void;
  removeAllForeignLayerStyles(): void;
  moveForeignLayerStyleIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addForeignSymbol(value: MSForeignSymbol): void;
  addForeignSymbols(foreignSymbols: NSArray<any> | any[]): void;
  insertForeignSymbol_atIndex(value: MSForeignSymbol, index: NSUInteger): void;
  insertForeignSymbol_beforeForeignSymbol(value: MSForeignSymbol, after: MSForeignSymbol | null): void;
  insertForeignSymbols_beforeForeignSymbol(values: NSArray<any> | any[], before: MSForeignSymbol | null): void;
  insertForeignSymbol_afterForeignSymbol(value: MSForeignSymbol, after: MSForeignSymbol | null): void;
  insertForeignSymbols_afterForeignSymbol(values: NSArray<any> | any[], after: MSForeignSymbol | null): void;
  removeForeignSymbol(value: MSForeignSymbol): void;
  removeForeignSymbolAtIndex(index: NSUInteger): void;
  removeForeignSymbolsAtIndexes(indexes: NSIndexSet): void;
  removeAllForeignSymbols(): void;
  moveForeignSymbolIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addForeignTextStyle(value: MSForeignTextStyle): void;
  addForeignTextStyles(foreignTextStyles: NSArray<any> | any[]): void;
  insertForeignTextStyle_atIndex(value: MSForeignTextStyle, index: NSUInteger): void;
  insertForeignTextStyle_beforeForeignTextStyle(value: MSForeignTextStyle, after: MSForeignTextStyle | null): void;
  insertForeignTextStyles_beforeForeignTextStyle(values: NSArray<any> | any[], before: MSForeignTextStyle | null): void;
  insertForeignTextStyle_afterForeignTextStyle(value: MSForeignTextStyle, after: MSForeignTextStyle | null): void;
  insertForeignTextStyles_afterForeignTextStyle(values: NSArray<any> | any[], after: MSForeignTextStyle | null): void;
  removeForeignTextStyle(value: MSForeignTextStyle): void;
  removeForeignTextStyleAtIndex(index: NSUInteger): void;
  removeForeignTextStylesAtIndexes(indexes: NSIndexSet): void;
  removeAllForeignTextStyles(): void;
  moveForeignTextStyleIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;
  addPage(value: MSPage): void;
  addPages(pages: NSArray<any> | any[]): void;
  insertPage_atIndex(value: MSPage, index: NSUInteger): void;
  insertPage_beforePage(value: MSPage, after: MSPage | null): void;
  insertPages_beforePage(values: NSArray<any> | any[], before: MSPage | null): void;
  insertPage_afterPage(value: MSPage, after: MSPage | null): void;
  insertPages_afterPage(values: NSArray<any> | any[], after: MSPage | null): void;
  removePage(value: MSPage): void;
  removePageAtIndex(index: NSUInteger): void;
  removePagesAtIndexes(indexes: NSIndexSet): void;
  removeAllPages(): void;
  movePageIndex_toIndex(fromIndex: NSUInteger, toIndex: NSUInteger): void;

  colorSpace(): MSColorSpace;
  setColorSpace(colorSpace: MSColorSpace): void;
  currentPageIndex(): NSUInteger;
  setCurrentPageIndex(currentPageIndex: NSUInteger): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  assets(): MSAssetCollection;
  setAssets(assets: MSAssetCollection): void;
  foreignLayerStyles(): NSArray<any>;
  setForeignLayerStyles(foreignLayerStyles: NSArray<any> | any[]): void;
  foreignSymbols(): NSArray<any>;
  setForeignSymbols(foreignSymbols: NSArray<any> | any[]): void;
  foreignTextStyles(): NSArray<any>;
  setForeignTextStyles(foreignTextStyles: NSArray<any> | any[]): void;
  layerStyles(): MSSharedStyleContainer;
  setLayerStyles(layerStyles: MSSharedStyleContainer): void;
  layerSymbols(): MSSymbolContainer;
  setLayerSymbols(layerSymbols: MSSymbolContainer): void;
  layerTextStyles(): MSSharedTextStyleContainer;
  setLayerTextStyles(layerTextStyles: MSSharedTextStyleContainer): void;
  pages(): NSArray<any>;
  setPages(pages: NSArray<any> | any[]): void;
}

declare const _MSDocumentData: {
  alloc(): _MSDocumentDataUninitialized;
  class(): _MSDocumentData;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

