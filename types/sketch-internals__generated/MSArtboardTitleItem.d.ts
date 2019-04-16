interface MSArtboardTitleItemUninitialized<InitializedType = MSArtboardTitleItem> extends NSObjectUninitialized<MSArtboardTitleItem> {}
interface MSArtboardTitleItem extends NSObject {
  isEqualToItem(item: MSArtboardTitleItem): boolean;

  bounds(): BCIntRect;
  setBounds(bounds: BCIntRect): void;
  color(): CGColorRef;
  setColor(color: CGColorRef): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  isFlowHome(): boolean;
  setIsFlowHome(isFlowHome: boolean): void;
  titleCompression(): number;
  setTitleCompression(titleCompression: number): void;
  isSymbolMaster(): boolean;
  setIsSymbolMaster(isSymbolMaster: boolean): void;
}
declare const MSArtboardTitleItem: {
  alloc(): MSArtboardTitleItemUninitialized;
  class(): MSArtboardTitleItem;
}

