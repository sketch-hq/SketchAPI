interface INSAccessibilityStaticText {
  accessibilityValue(): NSString;
  accessibilityAttributedStringForRange(range: NSRange): NSAttributedString;
  accessibilityVisibleCharacterRange(): NSRange;
}

