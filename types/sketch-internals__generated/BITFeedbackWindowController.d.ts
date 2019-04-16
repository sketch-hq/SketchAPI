interface BITFeedbackWindowControllerUninitialized<InitializedType = BITFeedbackWindowController> extends NSWindowControllerUninitialized<BITFeedbackWindowController> {
  initWithManager(feedbackManager: BITFeedbackManager): InitializedType;
}

interface BITFeedbackWindowController extends NSWindowController {
}

declare const BITFeedbackWindowController: {
  alloc(): BITFeedbackWindowControllerUninitialized;
  class(): BITFeedbackWindowController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

