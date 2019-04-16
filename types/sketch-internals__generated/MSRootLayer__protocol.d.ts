interface IMSRootLayer {

  grid(): MSSimpleGrid;
  setGrid(grid: MSSimpleGrid): void;
  layout(): MSLayoutGrid;
  setLayout(layout: MSLayoutGrid): void;
  rulerBase(): NSPoint;
  setRulerBase(rulerBase: NSPoint): void;
  contentBounds(): NSRect;
  rect(): CGRect;
}

