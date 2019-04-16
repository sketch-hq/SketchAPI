interface MSDefaultGridUninitialized<InitializedType = MSDefaultGrid> extends MSDefaultArchiveUninitialized<MSDefaultGrid> {}

interface MSDefaultGrid extends MSDefaultArchive {
}

declare const MSDefaultGrid: {
  alloc(): MSDefaultGridUninitialized;
  class(): MSDefaultGrid;
  defaultGrid(): MSSimpleGrid;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultGrid(defaultGrid: MSSimpleGrid): void;
  accessInstanceVariablesDirectly(): boolean;

}

