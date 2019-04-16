interface IMSLayerWithBackgroundColor {
  immutableBackgroundColor(): MSImmutableColor;

  hasBackgroundColor(): boolean;
  setHasBackgroundColor(hasBackgroundColor: boolean): void;
}

