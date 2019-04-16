interface MSAboutLinkButtonUninitialized<InitializedType = MSAboutLinkButton> extends MSHoverButtonUninitialized<MSAboutLinkButton> {}

interface MSAboutLinkButton extends MSHoverButton {
}

declare const MSAboutLinkButton: {
  alloc(): MSAboutLinkButtonUninitialized;
  class(): MSAboutLinkButton;
  cellClass(): any;
  setCellClass(cellClass: any): void;

}

