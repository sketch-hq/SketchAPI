interface MSBaseAlignLayersActionUninitialized<InitializedType = MSBaseAlignLayersAction> extends MSDocumentActionUninitialized<MSBaseAlignLayersAction> {}

interface MSBaseAlignLayersAction extends MSDocumentAction, IMSAltButtonTarget {
  alignToKey(key: NSString | string): void;
  altButtonCanShowAltImage(altButton: MSAltButton): boolean;
  toolTipForAltButton_alternate(altButton: MSAltButton, alternateTooltip: boolean): NSString;
}

declare const MSBaseAlignLayersAction: {
  alloc(): MSBaseAlignLayersActionUninitialized;
  class(): MSBaseAlignLayersAction;
}

