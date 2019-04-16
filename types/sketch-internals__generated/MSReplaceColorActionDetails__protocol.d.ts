interface IMSReplaceColorActionDetails {

  ignoreAlphaWhenMatchingOriginalColor(): boolean;
  originalColor(): MSColor;
  replaceAlphaOfOriginalColor(): boolean;
  replacementColor(): MSColor;
}

