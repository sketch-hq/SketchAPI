interface NSSliderAccessoryBehaviorUninitialized<InitializedType = NSSliderAccessoryBehavior> extends NSObjectUninitialized<NSSliderAccessoryBehavior> {}
interface NSSliderAccessoryBehavior extends NSObject, INSCoding, INSCopying {
  handleAction(sender: NSSliderAccessory): void;
}
declare const NSSliderAccessoryBehavior: {
  alloc(): NSSliderAccessoryBehaviorUninitialized;
  class(): NSSliderAccessoryBehavior;  behaviorWithTarget_action(target: any | null, action: string): NSSliderAccessoryBehavior;
  behaviorWithHandler(handler: Block): NSSliderAccessoryBehavior;

  automaticBehavior(): NSSliderAccessoryBehavior;
  valueStepBehavior(): NSSliderAccessoryBehavior;
  valueResetBehavior(): NSSliderAccessoryBehavior;

}

