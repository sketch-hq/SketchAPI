interface NSSharingServiceUninitialized<InitializedType = NSSharingService> extends NSObjectUninitialized<NSSharingService> {
  initWithTitle_image_alternateImage_handler(title: NSString | string, image: NSImage, alternateImage: NSImage | null, block: Block): InitializedType;
}
interface NSSharingService extends NSObject {
  canPerformWithItems(items: NSArray<any> | any[] | null): boolean;
  performWithItems(items: NSArray<any> | any[]): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  title(): NSString;
  image(): NSImage;
  alternateImage(): NSImage;
  menuItemTitle(): NSString;
  setMenuItemTitle(menuItemTitle: NSString | string): void;
  recipients(): NSArray<any>;
  setRecipients(recipients: NSArray<any> | any[]): void;
  subject(): NSString;
  setSubject(subject: NSString | string): void;
  messageBody(): NSString;
  permanentLink(): NSURL;
  accountName(): NSString;
  attachmentFileURLs(): NSArray<any>;
}
declare const NSSharingService: {
  alloc(): NSSharingServiceUninitialized;
  class(): NSSharingService;  sharingServicesForItems(items: NSArray<any> | any[]): NSArray<any>;
  sharingServiceNamed(serviceName: NSSharingServiceName): NSSharingService;

}

