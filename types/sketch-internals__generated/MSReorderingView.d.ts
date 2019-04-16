interface MSReorderingViewUninitialized<InitializedType = MSReorderingView> extends NSViewUninitialized<MSReorderingView> {}

interface MSReorderingView extends NSView, INSDraggingSource {
  draggingSession_sourceOperationMaskForDraggingContext(session: NSDraggingSession, context: NSDraggingContext): NSDragOperation;
  draggingSession_willBeginAtPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_movedToPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_endedAtPoint_operation(session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;

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
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

