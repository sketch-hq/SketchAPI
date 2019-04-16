interface NSScrubberTextItemViewUninitialized<InitializedType = NSScrubberTextItemView> extends NSScrubberItemViewUninitialized<NSScrubberTextItemView> {}
interface NSScrubberTextItemView extends NSScrubberItemView {

  textField(): NSTextField;
  title(): NSString;
  setTitle(title: NSString | string): void;
}
declare const NSScrubberTextItemView: {
  alloc(): NSScrubberTextItemViewUninitialized;
  class(): NSScrubberTextItemView;
}

