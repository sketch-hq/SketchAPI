interface MSAboutLinkButtonUninitialized<InitializedType = MSAboutLinkButton> extends MSHoverButtonUninitialized<MSAboutLinkButton> {}

interface MSAboutLinkButton extends MSHoverButton {
}

declare const MSAboutLinkButton: {
  alloc(): MSAboutLinkButtonUninitialized;
  class(): MSAboutLinkButton;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;

}

