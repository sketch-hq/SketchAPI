interface NSCollectionViewItemUninitialized<InitializedType = NSCollectionViewItem> extends NSViewControllerUninitialized<NSCollectionViewItem> {}

interface NSCollectionViewItem extends NSViewController, INSCopying, INSCollectionViewElement {
  copyWithZone(zone: NSZone | null): any;

  collectionView(): NSCollectionView;
  selected(): boolean;
  setSelected(selected: boolean): void;
  highlightState(): NSCollectionViewItemHighlightState;
  setHighlightState(highlightState: NSCollectionViewItemHighlightState): void;
  imageView(): NSImageView;
  setImageView(imageView: NSImageView): void;
  textField(): NSTextField;
  setTextField(textField: NSTextField): void;
  draggingImageComponents(): NSArray<any>;
}

declare const NSCollectionViewItem: {
  alloc(): NSCollectionViewItemUninitialized;
  class(): NSCollectionViewItem;
}

