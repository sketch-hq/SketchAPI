interface INSInputServerMouseTracker {
  mouseDownOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): boolean;
  mouseDraggedOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): boolean;
  mouseUpOnCharacterIndex_atCoordinate_withModifier_client(index: NSUInteger, point: NSPoint, flags: NSUInteger, sender: any): void;
}

