interface CHStringAttributesUninitialized<InitializedType = CHStringAttributes> extends NSDictionaryUninitialized<any, any, CHStringAttributes> {}
interface CHStringAttributes extends NSDictionary<any, any>, INSCopying {

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
  class(): CHStringAttributes;  stringAttributesWithFont(aFont: NSFont): any;
  stringAttributesWithFont_color(aFont: NSFont, aColor: NSColor): any;
  stringAttributesWithFont_alignment(aFont: NSFont, align: NSTextAlignment): any;
  stringAttributesWithFont_color_alignment(aFont: NSFont, aColor: NSColor, align: NSTextAlignment): any;

}

