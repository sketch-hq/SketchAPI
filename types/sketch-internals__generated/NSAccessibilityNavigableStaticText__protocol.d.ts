interface INSAccessibilityNavigableStaticText {
  accessibilityStringForRange(range: NSRange): NSString;
  accessibilityLineForIndex(index: NSInteger): NSInteger;
  accessibilityRangeForLine(lineNumber: NSInteger): NSRange;
  accessibilityFrameForRange(range: NSRange): NSRect;
}

