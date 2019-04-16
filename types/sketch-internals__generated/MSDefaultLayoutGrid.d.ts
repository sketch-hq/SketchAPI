interface MSDefaultLayoutGridUninitialized<InitializedType = MSDefaultLayoutGrid> extends MSDefaultArchiveUninitialized<MSDefaultLayoutGrid> {}

interface MSDefaultLayoutGrid extends MSDefaultArchive {
}

declare const MSDefaultLayoutGrid: {
  alloc(): MSDefaultLayoutGridUninitialized;
  class(): MSDefaultLayoutGrid;
  defaultLayout(): MSLayoutGrid;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultLayout(defaultLayout: MSLayoutGrid): void;
  accessInstanceVariablesDirectly(): boolean;

}

