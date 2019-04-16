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
}

