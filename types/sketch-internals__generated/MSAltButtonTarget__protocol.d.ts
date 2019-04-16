interface IMSAltButtonTarget {
  altButtonCanShowAltImage(altButton: MSAltButton): boolean;
  toolTipForAltButton_alternate(altButton: MSAltButton, alternateTooltip: boolean): NSString;
}

