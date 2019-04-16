interface INSSharingServicePickerDelegate {
  sharingServicePicker_sharingServicesForItems_proposedSharingServices(sharingServicePicker: NSSharingServicePicker, items: NSArray<any> | any[], proposedServices: NSArray<any> | any[]): NSArray<any>;
  sharingServicePicker_delegateForSharingService(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): any;
  sharingServicePicker_didChooseSharingService(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;
}

