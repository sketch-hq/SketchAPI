interface MSLayerSelectorUninitialized<InitializedType = MSLayerSelector> extends NSObjectUninitialized<MSLayerSelector> {}
interface MSLayerSelector extends NSObject {
  updateSelectionWithRect_page_extendSelection_options(selectionRect: NSRect, page: MSPage, extend: boolean, options: MSLayerSelectionOptions): void;

  initialSelection(): MSLayerArray;
  setInitialSelection(initialSelection: MSLayerArray): void;
}
declare const MSLayerSelector: {
  alloc(): MSLayerSelectorUninitialized;
  class(): MSLayerSelector;
}

