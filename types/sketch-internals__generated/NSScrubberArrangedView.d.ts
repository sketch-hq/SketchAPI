interface NSScrubberArrangedViewUninitialized<InitializedType = NSScrubberArrangedView> extends NSViewUninitialized<NSScrubberArrangedView> {}
interface NSScrubberArrangedView extends NSView {

  selected(): boolean;
  setSelected(selected: boolean): void;
  highlighted(): boolean;
  setHighlighted(highlighted: boolean): void;
}
declare const NSScrubberArrangedView: {
  alloc(): NSScrubberArrangedViewUninitialized;
  class(): NSScrubberArrangedView;
}

