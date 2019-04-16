interface NSAccessibilityCustomRotorItemResultUninitialized<InitializedType = NSAccessibilityCustomRotorItemResult> extends NSObjectUninitialized<NSAccessibilityCustomRotorItemResult> {
  initWithTargetElement(targetElement: any): InitializedType;
  initWithItemLoadingToken_customLabel(itemLoadingToken: NSAccessibilityLoadingToken, customLabel: NSString | string): InitializedType;
}
interface NSAccessibilityCustomRotorItemResult extends NSObject {

  targetElement(): any;
  itemLoadingToken(): NSAccessibilityLoadingToken;
  targetRange(): NSRange;
  setTargetRange(targetRange: NSRange): void;
  customLabel(): NSString;
  setCustomLabel(customLabel: NSString | string): void;
}
declare const NSAccessibilityCustomRotorItemResult: {
  alloc(): NSAccessibilityCustomRotorItemResultUninitialized;
  class(): NSAccessibilityCustomRotorItemResult;
}

