interface _MSImmutableTextLayerUninitialized<InitializedType = _MSImmutableTextLayer> extends MSImmutableStyledLayerUninitialized<_MSImmutableTextLayer> {}
interface _MSImmutableTextLayer extends MSImmutableStyledLayer {

  attributedString(): MSAttributedString;
  automaticallyDrawOnUnderlyingPath(): boolean;
  dontSynchroniseWithSymbol(): boolean;
  glyphBounds(): NSRect;
  lineSpacingBehaviour(): BCTextLineSpacingBehaviourType;
  preview(): MSImageData;
  textBehaviour(): BCTextBehaviourType;
}
declare const _MSImmutableTextLayer: {
  alloc(): _MSImmutableTextLayerUninitialized;
  class(): _MSImmutableTextLayer;
}

