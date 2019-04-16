interface MSDefaultTextStyleUninitialized<InitializedType = MSDefaultTextStyle> extends MSDefaultArchiveUninitialized<MSDefaultTextStyle> {}
interface MSDefaultTextStyle extends MSDefaultArchive {
}
declare const MSDefaultTextStyle: {
  alloc(): MSDefaultTextStyleUninitialized;
  class(): MSDefaultTextStyle;  recordTextStyleForLayer(layer: MSTextLayer): void;
  textStyleFromLayer(layer: MSTextLayer): NSDictionary<any, any>;

  defaultTextStyle(): NSDictionary<any, any>;
  setDefaultTextStyle(defaultTextStyle: NSDictionary<any, any> | {[key: string]: any}): void;

}

