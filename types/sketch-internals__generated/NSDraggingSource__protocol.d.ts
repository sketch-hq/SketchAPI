interface INSDraggingSource {
  draggingSession_sourceOperationMaskForDraggingContext(session: NSDraggingSession, context: NSDraggingContext): NSDragOperation;
  draggingSession_willBeginAtPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_movedToPoint(session: NSDraggingSession, screenPoint: NSPoint): void;
  draggingSession_endedAtPoint_operation(session: NSDraggingSession, screenPoint: NSPoint, operation: NSDragOperation): void;
  ignoreModifierKeysForDraggingSession(session: NSDraggingSession): boolean;
}

