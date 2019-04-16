interface NSAccessibilityElementUninitialized<InitializedType = NSAccessibilityElement> extends NSObjectUninitialized<NSAccessibilityElement> {}
interface NSAccessibilityElement extends NSObject, INSAccessibility {
  accessibilityAddChildElement(childElement: NSAccessibilityElement): void;

  accessibilityFrameInParentSpace(): NSRect;
  setAccessibilityFrameInParentSpace(accessibilityFrameInParentSpace: NSRect): void;
}
declare const NSAccessibilityElement: {
  alloc(): NSAccessibilityElementUninitialized;
  class(): NSAccessibilityElement;  accessibilityElementWithRole_frame_label_parent(role: NSAccessibilityRole, frame: NSRect, label: NSString | string | null, parent: any | null): any;

}

