interface MSReplaceFontsSheetUninitialized<InitializedType = MSReplaceFontsSheet> extends CHSheetControllerUninitialized<MSReplaceFontsSheet> {}
interface MSReplaceFontsSheet extends CHSheetController {
}
declare const MSReplaceFontsSheet: {
  alloc(): MSReplaceFontsSheetUninitialized;
  class(): MSReplaceFontsSheet;  dontReplaceFontLabel(): NSString;

}

