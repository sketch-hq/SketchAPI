interface MSTextLayerEventHandlerUninitialized<InitializedType = MSTextLayerEventHandler> extends MSEventHandlerUninitialized<MSTextLayerEventHandler> {}
interface MSTextLayerEventHandler extends MSEventHandler, INSTextViewDelegate, INSTextStorageDelegate, INSWindowDelegate, IMSTextLayerEditingDelegate, IMSTextLayerTextViewDelegate, IMSFirstLineTypesetterDelegate {
  applyTextTransform(textTransformValue: NSNumber | number | null): void;
  applyTextColor(color: MSColor): NSColor;
  updateTextViewStyling(): void;
  setListType(list: NSTextList): void;

  textView(): MSTextLayerTextView;
}
declare const MSTextLayerEventHandler: {
  alloc(): MSTextLayerEventHandlerUninitialized;
  class(): MSTextLayerEventHandler;
}

