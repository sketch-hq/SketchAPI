interface MSStyledLayerUninitialized<InitializedType = MSStyledLayer> extends _MSStyledLayerUninitialized<MSStyledLayer> {}

interface MSStyledLayer extends _MSStyledLayer, IMSStyledLayer {
  prepareAsMask(): void;
  canCutSegments(): boolean;
  possiblyFixRectangleBorderBeforeCut(): void;
  layerWithBezierSegmentCutAtIndex(index: NSUInteger): MSStyledLayer;
  resetSharedStyle(): void;
  createSharedStyleWithName(name: NSString | string): MSSharedStyle;
  updateSharedStyleToMatchSelf(): void;
  copyStyleToPasteboard(): NSPasteboard;
  copyStyleToPasteboard(pasteboard: NSPasteboard): void;
  writeStyleToPasteboard(pasteboard: NSPasteboard): void;
  layerStyleDidChange(): void;
  sharedObject(): MSSharedObject;
  hasMarkers(): boolean;

  isSharedStyleOutOfSync(): boolean;
  sharedStyle(): MSSharedStyle;
  setSharedStyle(sharedStyle: MSSharedStyle): void;
}

declare const MSStyledLayer: {
  alloc(): MSStyledLayerUninitialized;
  class(): MSStyledLayer;
  layerWithImageFromPasteboard(pasteboard: NSPasteboard): MSStyledLayer;
  layerWithImageFromFileURL(fileURL: NSURL): MSStyledLayer;
  pasteStyleFromPasteboardOnLayers_document(styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleFromPasteboard_onLayers_document(pasteboard: NSPasteboard, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  pasteStyleDict_onLayers_document(style: NSDictionary<any, any> | {[key: string]: any}, styledLayers: NSArray<any> | any[], document: MSDocumentData): void;
  supportedPasteboardTypesForStyleCopying(): NSArray<any>;
}

