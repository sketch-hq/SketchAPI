interface CHStringAttributesUninitialized<InitializedType = CHStringAttributes> extends NSDictionaryUninitialized<any, any, CHStringAttributes> {}

interface CHStringAttributes extends NSDictionary<any, any>, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  font(): NSFont;
  setFont(font: NSFont): void;
  color(): NSColor;
  setColor(color: NSColor): void;
  shadow(): NSShadow;
  setShadow(shadow: NSShadow): void;
  alignment(): NSTextAlignment;
  setAlignment(alignment: NSTextAlignment): void;
  fontSize(): CGFloat;
  setFontSize(fontSize: CGFloat): void;
}

declare const CHStringAttributes: {
  alloc(): CHStringAttributesUninitialized;
  class(): CHStringAttributes;
  stringAttributesWithFont(aFont: NSFont): any;
  stringAttributesWithFont_color(aFont: NSFont, aColor: NSColor): any;
  stringAttributesWithFont_alignment(aFont: NSFont, align: NSTextAlignment): any;
  stringAttributesWithFont_color_alignment(aFont: NSFont, aColor: NSColor, align: NSTextAlignment): any;
  dictionaryWithContentsOfFile(path: NSString | string): NSDictionary<any, any>;
  dictionaryWithContentsOfURL(url: NSURL): NSDictionary<any, any>;
  dictionary(): CHStringAttributes;
  dictionaryWithObject_forKey(object: ObjectType, key: KeyType): CHStringAttributes;
  dictionaryWithObjects_forKeys_count(objects: ObjectType[], keys: KeyType[], cnt: NSUInteger): CHStringAttributes;
  dictionaryWithObjectsAndKeys(firstObject: any, ...args: any[]): CHStringAttributes;
  dictionaryWithDictionary(dict: NSDictionary<any, any> | {[key: string]: any}): CHStringAttributes;
  dictionaryWithObjects_forKeys(objects: NSArray<any> | any[], keys: NSArray<any> | any[]): CHStringAttributes;
  dictionaryWithContentsOfURL_error(url: NSURL, error: MOPointer<NSError>): NSDictionary<any, any>;
  sharedKeySetForKeys(keys: NSArray<any> | any[]): any;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

