interface NSAccessibilityCustomRotorSearchParametersUninitialized<InitializedType = NSAccessibilityCustomRotorSearchParameters> extends NSObjectUninitialized<NSAccessibilityCustomRotorSearchParameters> {}
interface NSAccessibilityCustomRotorSearchParameters extends NSObject {

  currentItem(): NSAccessibilityCustomRotorItemResult;
  setCurrentItem(currentItem: NSAccessibilityCustomRotorItemResult): void;
  searchDirection(): NSAccessibilityCustomRotorSearchDirection;
  setSearchDirection(searchDirection: NSAccessibilityCustomRotorSearchDirection): void;
  filterString(): NSString;
  setFilterString(filterString: NSString | string): void;
}
declare const NSAccessibilityCustomRotorSearchParameters: {
  alloc(): NSAccessibilityCustomRotorSearchParametersUninitialized;
  class(): NSAccessibilityCustomRotorSearchParameters;
}

