interface MSManageForeignSymbolItemUninitialized<InitializedType = MSManageForeignSymbolItem> extends NSObjectUninitialized<MSManageForeignSymbolItem> {
  initWithForeignSymbol(foreignSymbol: MSForeignSymbol): InitializedType;
}
interface MSManageForeignSymbolItem extends NSObject {

  libraryName(): NSString;
  foreignSymbol(): MSForeignSymbol;
  library(): MSAssetLibrary;
  symbolName(): NSString;
}
declare const MSManageForeignSymbolItem: {
  alloc(): MSManageForeignSymbolItemUninitialized;
  class(): MSManageForeignSymbolItem;
}

