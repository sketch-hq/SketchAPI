interface NSSharingServicePickerUninitialized<InitializedType = NSSharingServicePicker> extends NSObjectUninitialized<NSSharingServicePicker> {
  initWithItems(items: NSArray<any> | any[]): InitializedType;
}
interface NSSharingServicePicker extends NSObject {
  showRelativeToRect_ofView_preferredEdge(rect: NSRect, view: NSView, preferredEdge: NSRectEdge): void;

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const NSSharingServicePicker: {
  alloc(): NSSharingServicePickerUninitialized;
  class(): NSSharingServicePicker;
}

