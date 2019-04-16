interface SVGCSSParserUninitialized<InitializedType = SVGCSSParser> extends NSObjectUninitialized<SVGCSSParser> {}
interface SVGCSSParser extends NSObject {
}
declare const SVGCSSParser: {
  alloc(): SVGCSSParserUninitialized;
  class(): SVGCSSParser;  parseCSSAttributeList(cssAttributes: NSString | string): NSDictionary<any, any>;
  mergeStylesheet_withExisting(styleSheet: NSString | string, existing: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;

}

