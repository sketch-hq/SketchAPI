interface NSDraggingImageComponentUninitialized<InitializedType = NSDraggingImageComponent> extends NSObjectUninitialized<NSDraggingImageComponent> {
  initWithKey(key: NSDraggingImageComponentKey): InitializedType;
}
interface NSDraggingImageComponent extends NSObject {

  key(): NSDraggingImageComponentKey;
  setKey(key: NSDraggingImageComponentKey): void;
  contents(): any;
  setContents(contents: any): void;
  frame(): NSRect;
  setFrame(frame: NSRect): void;
}
declare const NSDraggingImageComponent: {
  alloc(): NSDraggingImageComponentUninitialized;
  class(): NSDraggingImageComponent;  draggingImageComponentWithKey(key: NSDraggingImageComponentKey): NSDraggingImageComponent;

}

