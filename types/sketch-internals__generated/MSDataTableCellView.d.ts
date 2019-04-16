interface MSDataTableCellViewUninitialized<InitializedType = MSDataTableCellView> extends NSTableCellViewUninitialized<MSDataTableCellView> {}
interface MSDataTableCellView extends NSTableCellView {

  dataPreferenceItem(): MSDataPreferenceItem;
}
declare const MSDataTableCellView: {
  alloc(): MSDataTableCellViewUninitialized;
  class(): MSDataTableCellView;
}

