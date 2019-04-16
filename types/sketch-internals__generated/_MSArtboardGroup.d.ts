interface _MSArtboardGroupUninitialized<InitializedType = _MSArtboardGroup> extends MSLayerGroupUninitialized<_MSArtboardGroup> {}
interface _MSArtboardGroup extends MSLayerGroup {

  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
  includeBackgroundColorInExport(): boolean;
  setIncludeBackgroundColorInExport(includeBackgroundColorInExport: boolean): void;
  includeInCloudUpload(): boolean;
  setIncludeInCloudUpload(includeInCloudUpload: boolean): void;
  isFlowHome(): boolean;
  setIsFlowHome(isFlowHome: boolean): void;
  presetDictionary(): NSDictionary<any, any>;
  setPresetDictionary(presetDictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  resizesContent(): boolean;
  setResizesContent(resizesContent: boolean): void;
  backgroundColor(): MSColor;
  setBackgroundColor(backgroundColor: MSColor): void;
  grid(): MSSimpleGrid;
  setGrid(grid: MSSimpleGrid): void;
  horizontalRulerData(): MSRulerData;
  setHorizontalRulerData(horizontalRulerData: MSRulerData): void;
  layout(): MSLayoutGrid;
  setLayout(layout: MSLayoutGrid): void;
  verticalRulerData(): MSRulerData;
  setVerticalRulerData(verticalRulerData: MSRulerData): void;
}
declare const _MSArtboardGroup: {
  alloc(): _MSArtboardGroupUninitialized;
  class(): _MSArtboardGroup;
}

