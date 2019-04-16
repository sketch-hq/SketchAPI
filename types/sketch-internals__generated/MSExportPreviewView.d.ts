interface MSExportPreviewViewUninitialized<InitializedType = MSExportPreviewView> extends NSViewUninitialized<MSExportPreviewView> {
  initWithViewModel(viewModel: MSExportPreviewViewModel): InitializedType;
}

interface MSExportPreviewView extends NSView, INSDraggingSource, INSPasteboardWriting {
  draggingSession_sourceOperationMaskForDraggingContext(session: NSDraggingSession, context: NSDraggingContext): NSDragOperation;
  draggingSession_willBeginAtPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_movedToPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_endedAtPoint_operation(session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;
  writableTypesForPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  writingOptionsForType_pasteboard(type: NSPasteboardType, pasteboard: NSPasteboard): NSPasteboardWritingOptions;
  pasteboardPropertyListForType(type: NSPasteboardType): any;

  viewModel(): MSExportPreviewViewModel;
  setViewModel(viewModel: MSExportPreviewViewModel): void;
}

declare const MSExportPreviewView: {
  alloc(): MSExportPreviewViewUninitialized;
  class(): MSExportPreviewView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

