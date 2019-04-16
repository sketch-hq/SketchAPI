interface MSUnavailableUpdatesWindowControllerUninitialized<InitializedType = MSUnavailableUpdatesWindowController> extends NSWindowControllerUninitialized<MSUnavailableUpdatesWindowController> {}
interface MSUnavailableUpdatesWindowController extends NSWindowController, INSWindowDelegate {
}
declare const MSUnavailableUpdatesWindowController: {
  alloc(): MSUnavailableUpdatesWindowControllerUninitialized;
  class(): MSUnavailableUpdatesWindowController;  showModalWithVersion_buildNumber_reason(version: NSString | string, buildNumber: NSString | string, reason: MSUnavailableUpdatesReason): void;

}

