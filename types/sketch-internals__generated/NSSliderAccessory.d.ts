interface NSSliderAccessoryUninitialized<InitializedType = NSSliderAccessory> extends NSObjectUninitialized<NSSliderAccessory> {}
interface NSSliderAccessory extends NSObject, INSCoding, INSAccessibility, INSAccessibilityElement {

  behavior(): NSSliderAccessoryBehavior;
  setBehavior(behavior: NSSliderAccessoryBehavior): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
}
declare const NSSliderAccessory: {
  alloc(): NSSliderAccessoryUninitialized;
  class(): NSSliderAccessory;  accessoryWithImage(image: NSImage): NSSliderAccessory;

}

