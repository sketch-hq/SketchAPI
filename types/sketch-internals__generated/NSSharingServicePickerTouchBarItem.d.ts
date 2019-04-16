interface NSSharingServicePickerTouchBarItemUninitialized<InitializedType = NSSharingServicePickerTouchBarItem> extends NSTouchBarItemUninitialized<NSSharingServicePickerTouchBarItem> {}
interface NSSharingServicePickerTouchBarItem extends NSTouchBarItem {

  delegate(): any;
  setDelegate(delegate: any): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  buttonTitle(): NSString;
  setButtonTitle(buttonTitle: NSString | string): void;
  buttonImage(): NSImage;
  setButtonImage(buttonImage: NSImage): void;
}
declare const NSSharingServicePickerTouchBarItem: {
  alloc(): NSSharingServicePickerTouchBarItemUninitialized;
  class(): NSSharingServicePickerTouchBarItem;
}

