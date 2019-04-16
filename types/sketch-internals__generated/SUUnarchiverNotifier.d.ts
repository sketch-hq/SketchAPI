interface SUUnarchiverNotifierUninitialized<InitializedType = SUUnarchiverNotifier> extends NSObjectUninitialized<SUUnarchiverNotifier> {
  initWithCompletionBlock_progressBlock(completionBlock: Block, progressBlock: Block): InitializedType;
}
interface SUUnarchiverNotifier extends NSObject {
  notifySuccess(): void;
  notifyFailureWithError(reason: NSError): void;
  notifyProgress(progress: number): void;
}
declare const SUUnarchiverNotifier: {
  alloc(): SUUnarchiverNotifierUninitialized;
  class(): SUUnarchiverNotifier;
}

