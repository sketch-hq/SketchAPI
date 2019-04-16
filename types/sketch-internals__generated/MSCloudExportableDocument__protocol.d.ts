interface IMSCloudExportableDocument {

  documentData(): MSDocumentData;
  UIMetadata(): NSDictionary<any, any>;
  cloudShare(): SCKShare;
  setCloudShare(cloudShare: SCKShare): void;
  cloudName(): NSString;
}

