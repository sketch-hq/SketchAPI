interface _MSPageUninitialized<InitializedType = _MSPage> extends MSLayerGroupUninitialized<_MSPage> {}
interface _MSPage extends MSLayerGroup {

  includeInCloudUpload(): boolean;
  setIncludeInCloudUpload(includeInCloudUpload: boolean): void;
  grid(): MSSimpleGrid;
  setGrid(grid: MSSimpleGrid): void;
  horizontalRulerData(): MSRulerData;
  setHorizontalRulerData(horizontalRulerData: MSRulerData): void;
  layout(): MSLayoutGrid;
  setLayout(layout: MSLayoutGrid): void;
  verticalRulerData(): MSRulerData;
  setVerticalRulerData(verticalRulerData: MSRulerData): void;
}
declare const _MSPage: {
  alloc(): _MSPageUninitialized;
  class(): _MSPage;
}

