interface MSPatternImageCellUninitialized<InitializedType = MSPatternImageCell> extends NSImageCellUninitialized<MSPatternImageCell> {}
interface MSPatternImageCell extends NSImageCell {

  tiled(): boolean;
  setTiled(tiled: boolean): void;
}
declare const MSPatternImageCell: {
  alloc(): MSPatternImageCellUninitialized;
  class(): MSPatternImageCell;
}

