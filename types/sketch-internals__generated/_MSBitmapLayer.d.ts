interface _MSBitmapLayerUninitialized<InitializedType = _MSBitmapLayer> extends MSStyledLayerUninitialized<_MSBitmapLayer> {}

interface _MSBitmapLayer extends MSStyledLayer {

  clippingMask(): NSRect;
  setClippingMask(clippingMask: NSRect): void;
  fillReplacesImage(): boolean;
  setFillReplacesImage(fillReplacesImage: boolean): void;
  image(): MSImageData;
  setImage(image: MSImageData): void;
  intendedDPI(): NSInteger;
  setIntendedDPI(intendedDPI: NSInteger): void;
}

declare const _MSBitmapLayer: {
  alloc(): _MSBitmapLayerUninitialized;
  class(): _MSBitmapLayer;
  layerWithImageFromPasteboard(pasteboard: NSPasteboard): _MSBitmapLayer;
  layerWithImageFromFileURL(fileURL: NSURL): _MSBitmapLayer;
  pasteStyleFromPasteboardOnLayers_document(styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleFromPasteboard_onLayers_document(pasteboard: NSPasteboard, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleDict_onLayers_document(style: NSDictionary<any, any> | {[key: string]: any}, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  supportedPasteboardTypesForStyleCopying(): NSArray<any>;
}

