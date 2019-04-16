interface NSExtensionItemUninitialized<InitializedType = NSExtensionItem> extends NSObjectUninitialized<NSExtensionItem> {}
interface NSExtensionItem extends NSObject, INSCopying, INSSecureCoding {

  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  attributedContentText(): NSAttributedString;
  setAttributedContentText(attributedContentText: NSAttributedString): void;
  attachments(): NSArray<any>;
  setAttachments(attachments: NSArray<any> | any[]): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const NSExtensionItem: {
  alloc(): NSExtensionItemUninitialized;
  class(): NSExtensionItem;
}

