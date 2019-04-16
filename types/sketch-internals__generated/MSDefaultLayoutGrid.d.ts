interface MSDefaultLayoutGridUninitialized<InitializedType = MSDefaultLayoutGrid> extends MSDefaultArchiveUninitialized<MSDefaultLayoutGrid> {}
interface MSDefaultLayoutGrid extends MSDefaultArchive {
}
declare const MSDefaultLayoutGrid: {
  alloc(): MSDefaultLayoutGridUninitialized;
  class(): MSDefaultLayoutGrid;
  defaultLayout(): MSLayoutGrid;
  setDefaultLayout(defaultLayout: MSLayoutGrid): void;

}

