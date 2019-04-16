interface MSOffsetPathSheetUninitialized<InitializedType = MSOffsetPathSheet> extends MSCanvasUpdatingSheetUninitialized<MSOffsetPathSheet> {}

interface MSOffsetPathSheet extends MSCanvasUpdatingSheet {

  offset(): CGFloat;
  setOffset(offset: CGFloat): void;
  duplicateLayers(): boolean;
  setDuplicateLayers(duplicateLayers: boolean): void;
}

declare const MSOffsetPathSheet: {
  alloc(): MSOffsetPathSheetUninitialized;
  class(): MSOffsetPathSheet;
  accessInstanceVariablesDirectly(): boolean;

}

