interface INSAccessibilityElementLoading {
  accessibilityElementWithToken(token: NSAccessibilityLoadingToken): any;
  accessibilityRangeInTargetElementWithToken(token: NSAccessibilityLoadingToken): NSRange;
}

