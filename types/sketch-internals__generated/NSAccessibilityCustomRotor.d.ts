interface NSAccessibilityCustomRotorUninitialized<InitializedType = NSAccessibilityCustomRotor> extends NSObjectUninitialized<NSAccessibilityCustomRotor> {
  initWithLabel_itemSearchDelegate(label: NSString | string, itemSearchDelegate: any): InitializedType;
  initWithRotorType_itemSearchDelegate(rotorType: NSAccessibilityCustomRotorType, itemSearchDelegate: any): InitializedType;
}
interface NSAccessibilityCustomRotor extends NSObject {

  type(): NSAccessibilityCustomRotorType;
  setType(type: NSAccessibilityCustomRotorType): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
  itemSearchDelegate(): any;
  setItemSearchDelegate(itemSearchDelegate: any): void;
  itemLoadingDelegate(): any;
  setItemLoadingDelegate(itemLoadingDelegate: any): void;
}
declare const NSAccessibilityCustomRotor: {
  alloc(): NSAccessibilityCustomRotorUninitialized;
  class(): NSAccessibilityCustomRotor;
}

