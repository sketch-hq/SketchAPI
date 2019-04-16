interface MSLayerBuilderUninitialized<InitializedType = MSLayerBuilder> extends NSObjectUninitialized<MSLayerBuilder> {}
interface MSLayerBuilder extends NSObject {
}
declare const MSLayerBuilder: {
  alloc(): MSLayerBuilderUninitialized;
  class(): MSLayerBuilder;  layerTreeWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): any;
  layerTreeWithJSON_relativeToURL_error(json: NSString | string, url: NSURL, error: NSError): any;
  layerTreeWithContentsOfURL_error(url: NSURL, error: NSError): any;

}

