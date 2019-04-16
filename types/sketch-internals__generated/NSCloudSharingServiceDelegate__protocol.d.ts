interface INSCloudSharingServiceDelegate {
  sharingService_didCompleteForItems_error(sharingService: NSSharingService, items: NSArray<any> | any[], error: NSError | null): void;
  optionsForSharingService_shareProvider(cloudKitSharingService: NSSharingService, provider: NSItemProvider): NSCloudKitSharingServiceOptions;
  sharingService_didSaveShare(sharingService: NSSharingService, share: CKShare): void;
  sharingService_didStopSharing(sharingService: NSSharingService, share: CKShare): void;
}

