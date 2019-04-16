interface IMSColorConverter {
  convertColor(color: MSColor): MSColor;
  convertImmutableColor(color: MSImmutableColor): MSImmutableColor;
  shouldConvertColor(color: MSColor): boolean;
  shouldConvertImmutableColor(color: MSImmutableColor): boolean;
}

