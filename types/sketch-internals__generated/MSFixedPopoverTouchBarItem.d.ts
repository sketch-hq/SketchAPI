interface MSFixedPopoverTouchBarItemUninitialized<InitializedType = MSFixedPopoverTouchBarItem> extends NSPopoverTouchBarItemUninitialized<MSFixedPopoverTouchBarItem> {}
interface MSFixedPopoverTouchBarItem extends NSPopoverTouchBarItem {

  ms_parentTouchBar(): NSTouchBar;
  setMs_parentTouchBar(ms_parentTouchBar: NSTouchBar): void;
}
declare const MSFixedPopoverTouchBarItem: {
  alloc(): MSFixedPopoverTouchBarItemUninitialized;
  class(): MSFixedPopoverTouchBarItem;
}

