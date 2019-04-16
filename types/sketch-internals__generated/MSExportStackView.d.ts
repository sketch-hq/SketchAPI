interface MSExportStackViewUninitialized<InitializedType = MSExportStackView> extends MSStackViewUninitialized<MSExportStackView> {}
interface MSExportStackView extends MSStackView {
}
declare const MSExportStackView: {
  alloc(): MSExportStackViewUninitialized;
  class(): MSExportStackView;
}

