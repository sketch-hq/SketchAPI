interface MSPasteboardLayersBaseUninitialized<InitializedType = MSPasteboardLayersBase> extends NSObjectUninitialized<MSPasteboardLayersBase> {}
interface MSPasteboardLayersBase extends NSObject {
}
declare const MSPasteboardLayersBase: {
  alloc(): MSPasteboardLayersBaseUninitialized;
  class(): MSPasteboardLayersBase;  dictionaryFromPasteboardLayers(pasteboardLayers: MSPasteboardLayers): NSDictionary<any, any>;
  dataFromPasteboardDictionary(dict: NSDictionary<any, any> | {[key: string]: any}): NSData;
  pasteboardDataFromData(data: NSData | null): MSPasteboardLayers;

}

