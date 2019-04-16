interface IMSImporter extends NSObject {
  prepareToImportFromData(data: NSData): NSUInteger;
  prepareToImportFromURL(url: NSURL): NSUInteger;
  importIntoPage_name_progress(page: MSPage, name: NSString | string, progress: BCVoidBlock): void;
  finishImporting(): void;
  firstPhaseSubtitle(): NSString;
  secondPhaseSubtitleForValue_maximum(value: NSInteger, maximum: NSInteger): NSString;
  shouldExpandPages(): boolean;
  shouldCollapseSinglePage(): boolean;
  importAsLayer(): MSLayer;
}

