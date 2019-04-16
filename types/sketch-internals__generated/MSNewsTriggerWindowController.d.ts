interface MSNewsTriggerWindowControllerUninitialized<InitializedType = MSNewsTriggerWindowController> extends CHWindowControllerUninitialized<MSNewsTriggerWindowController> {}

interface MSNewsTriggerWindowController extends CHWindowController {
}

declare const MSNewsTriggerWindowController: {
  alloc(): MSNewsTriggerWindowControllerUninitialized;
  class(): MSNewsTriggerWindowController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

