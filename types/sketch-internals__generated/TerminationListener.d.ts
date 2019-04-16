interface TerminationListenerUninitialized<InitializedType = TerminationListener> extends NSObjectUninitialized<TerminationListener> {
  initWithProcessIdentifier(processIdentifier: NSNumber | number): InitializedType;
}
interface TerminationListener extends NSObject {
  startListeningWithCompletion(completionBlock: Block): void;

  terminated(): boolean;
}
declare const TerminationListener: {
  alloc(): TerminationListenerUninitialized;
  class(): TerminationListener;
}

