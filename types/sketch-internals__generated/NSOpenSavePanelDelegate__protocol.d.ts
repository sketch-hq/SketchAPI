interface INSOpenSavePanelDelegate {
  panel_shouldEnableURL(sender: any, url: NSURL): boolean;
  panel_validateURL_error(sender: any, url: NSURL, outError: NSError): boolean;
  panel_didChangeToDirectoryURL(sender: any, url: NSURL | null): void;
  panel_userEnteredFilename_confirmed(sender: any, filename: NSString | string, okFlag: boolean): NSString;
  panel_willExpand(sender: any, expanding: boolean): void;
  panelSelectionDidChange(sender: any | null): void;
}

