interface NSControllerUninitialized<InitializedType = NSController> extends NSObjectUninitialized<NSController> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSController extends NSObject, INSCoding, INSEditor, INSEditorRegistration {
  objectDidBeginEditing(editor: any): void;
  objectDidEndEditing(editor: any): void;
  discardEditing(): void;
  commitEditing(): boolean;
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: any | null, didCommitSelector: string | null, contextInfo: void | null): void;

  editing(): boolean;
}
declare const NSController: {
  alloc(): NSControllerUninitialized;
  class(): NSController;
}

