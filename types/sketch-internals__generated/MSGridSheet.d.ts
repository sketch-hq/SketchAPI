interface MSGridSheetUninitialized<InitializedType = MSGridSheet> extends MSGridSheetBaseUninitialized<MSGridSheet> {}
interface MSGridSheet extends MSGridSheetBase {
  setAsDefault(sender: any): IBAction;
}
declare const MSGridSheet: {
  alloc(): MSGridSheetUninitialized;
  class(): MSGridSheet;
}

