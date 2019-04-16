interface IMSHUDClient {
  hudSetMonitor(monitor: MSRenderMonitor): void;

  hudClientName(): NSString;
  hudDocumentData(): MSDocumentData;
}

