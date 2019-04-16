interface NSDraggingItemUninitialized<InitializedType = NSDraggingItem> extends NSObjectUninitialized<NSDraggingItem> {
  initWithPasteboardWriter(pasteboardWriter: any): InitializedType;
}
interface NSDraggingItem extends NSObject {
  setDraggingFrame_contents(frame: NSRect, contents: any | null): void;

  item(): any;
  draggingFrame(): NSRect;
  setDraggingFrame(draggingFrame: NSRect): void;
  imageComponents(): NSArray<any>;
}
declare const NSDraggingItem: {
  alloc(): NSDraggingItemUninitialized;
  class(): NSDraggingItem;
}

