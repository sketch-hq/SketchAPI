interface MSInlineTextLabelForUpDownFieldUninitialized<InitializedType = MSInlineTextLabelForUpDownField> extends MSTextLabelForUpDownFieldUninitialized<MSInlineTextLabelForUpDownField> {}
interface MSInlineTextLabelForUpDownField extends MSTextLabelForUpDownField {
}
declare const MSInlineTextLabelForUpDownField: {
  alloc(): MSInlineTextLabelForUpDownFieldUninitialized;
  class(): MSInlineTextLabelForUpDownField;  labelWithImage(image: NSImage): MSInlineTextLabelForUpDownField;

}

