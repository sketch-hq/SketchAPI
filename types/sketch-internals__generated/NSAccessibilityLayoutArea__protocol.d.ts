interface INSAccessibilityLayoutArea {
  accessibilityLabel(): NSString;
  accessibilityChildren(): NSArray<any>;
  accessibilitySelectedChildren(): NSArray<any>;

  accessibilityFocusedUIElement(): any;
}

