interface MSUpdateControllerUninitialized<InitializedType = MSUpdateController> extends NSObjectUninitialized<MSUpdateController> {}
interface MSUpdateController extends NSObject {
  checkNormally(): void;
  checkSilently(): void;
  checkQuietly(): void;
  commandEnabled(): boolean;
  commandLabel(): NSString;

  unavailableUpdateCount(): NSUInteger;
  setUnavailableUpdateCount(unavailableUpdateCount: NSUInteger): void;
  hasAvailableUpdates(): boolean;
  setHasAvailableUpdates(hasAvailableUpdates: boolean): void;
}
declare const MSUpdateController: {
  alloc(): MSUpdateControllerUninitialized;
  class(): MSUpdateController;
}

