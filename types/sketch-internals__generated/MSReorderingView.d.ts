interface MSReorderingViewUninitialized<InitializedType = MSReorderingView> extends NSViewUninitialized<MSReorderingView> {}
interface MSReorderingView extends NSView, INSDraggingSource {

  delegate(): any;
  setDelegate(delegate: any): void;
  deleteAction(): string;
  setDeleteAction(deleteAction: string): void;
  duplicateAction(): string;
  setDuplicateAction(duplicateAction: string): void;
  target(): any;
  setTarget(target: any): void;
  reorderingTag(): NSInteger;
  setReorderingTag(reorderingTag: NSInteger): void;
}
declare const MSReorderingView: {
  alloc(): MSReorderingViewUninitialized;
  class(): MSReorderingView;
}

