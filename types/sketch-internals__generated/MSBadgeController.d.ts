interface MSBadgeControllerUninitialized<InitializedType = MSBadgeController> extends NSObjectUninitialized<MSBadgeController> {
  initWithDocument(document: MSDocument): InitializedType;
}
interface MSBadgeController extends NSObject {
  refresh(): void;

  activeWindowBadgingActions(): NSArray<any>;
}
declare const MSBadgeController: {
  alloc(): MSBadgeControllerUninitialized;
  class(): MSBadgeController;
}

