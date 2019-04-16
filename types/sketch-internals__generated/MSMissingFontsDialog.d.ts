interface MSMissingFontsDialogUninitialized<InitializedType = MSMissingFontsDialog> extends NSWindowControllerUninitialized<MSMissingFontsDialog> {}
interface MSMissingFontsDialog extends NSWindowController, INSTableViewDataSource {
  runPanelWithMissingFonts_savingWillChangeFonts(missingFonts: NSArray<any> | any[], savingWillChangeFonts: boolean): boolean;
  //   close(sender: any): IBAction;
  openAnyway(sender: any): IBAction;
}
declare const MSMissingFontsDialog: {
  alloc(): MSMissingFontsDialogUninitialized;
  class(): MSMissingFontsDialog;
}

