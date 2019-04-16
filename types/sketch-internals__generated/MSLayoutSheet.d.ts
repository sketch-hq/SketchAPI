interface MSLayoutSheetUninitialized<InitializedType = MSLayoutSheet> extends MSGridSheetBaseUninitialized<MSLayoutSheet> {}

interface MSLayoutSheet extends MSGridSheetBase {
  setAsDefault(sender: any): IBAction;
  centerGrid(sender: any): IBAction;
  offsetChanged(sender: any): IBAction;

  centerGridButton(): NSButton;
  setCenterGridButton(centerGridButton: NSButton): void;
}

declare const MSLayoutSheet: {
  alloc(): MSLayoutSheetUninitialized;
  class(): MSLayoutSheet;
  accessInstanceVariablesDirectly(): boolean;

}

