interface _MSTextLayerUninitialized<InitializedType = _MSTextLayer> extends MSStyledLayerUninitialized<_MSTextLayer> {}

interface _MSTextLayer extends MSStyledLayer {

  attributedString(): MSAttributedString;
  setAttributedString(attributedString: MSAttributedString): void;
  automaticallyDrawOnUnderlyingPath(): boolean;
  setAutomaticallyDrawOnUnderlyingPath(automaticallyDrawOnUnderlyingPath: boolean): void;
  dontSynchroniseWithSymbol(): boolean;
  setDontSynchroniseWithSymbol(dontSynchroniseWithSymbol: boolean): void;
  glyphBounds(): NSRect;
  setGlyphBounds(glyphBounds: NSRect): void;
  lineSpacingBehaviour(): BCTextLineSpacingBehaviourType;
  setLineSpacingBehaviour(lineSpacingBehaviour: BCTextLineSpacingBehaviourType): void;
  preview(): MSImageData;
  setPreview(preview: MSImageData): void;
  textBehaviour(): BCTextBehaviourType;
  setTextBehaviour(textBehaviour: BCTextBehaviourType): void;
}

declare const _MSTextLayer: {
  alloc(): _MSTextLayerUninitialized;
  class(): _MSTextLayer;
  layerWithImageFromPasteboard(pasteboard: NSPasteboard): _MSTextLayer;
  layerWithImageFromFileURL(fileURL: NSURL): _MSTextLayer;
  pasteStyleFromPasteboardOnLayers_document(styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleFromPasteboard_onLayers_document(pasteboard: NSPasteboard, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleDict_onLayers_document(style: NSDictionary<any, any> | {[key: string]: any}, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  supportedPasteboardTypesForStyleCopying(): NSArray<any>;
}

