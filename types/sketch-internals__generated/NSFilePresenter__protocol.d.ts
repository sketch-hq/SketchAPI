interface INSFilePresenter extends NSObject {
  relinquishPresentedItemToReader(reader: Block): void;
  relinquishPresentedItemToWriter(writer: Block): void;
  savePresentedItemChangesWithCompletionHandler(completionHandler: Block): void;
  accommodatePresentedItemDeletionWithCompletionHandler(completionHandler: Block): void;
  presentedItemDidMoveToURL(newURL: NSURL): void;
  presentedItemDidChange(): void;
  presentedItemDidChangeUbiquityAttributes(attributes: NSSet<any>): void;
  presentedItemDidGainVersion(version: NSFileVersion): void;
  presentedItemDidLoseVersion(version: NSFileVersion): void;
  presentedItemDidResolveConflictVersion(version: NSFileVersion): void;
  accommodatePresentedSubitemDeletionAtURL_completionHandler(url: NSURL, completionHandler: Block): void;
  presentedSubitemDidAppearAtURL(url: NSURL): void;
  presentedSubitemAtURL_didMoveToURL(oldURL: NSURL, newURL: NSURL): void;
  presentedSubitemDidChangeAtURL(url: NSURL): void;
  presentedSubitemAtURL_didGainVersion(url: NSURL, version: NSFileVersion): void;
  presentedSubitemAtURL_didLoseVersion(url: NSURL, version: NSFileVersion): void;
  presentedSubitemAtURL_didResolveConflictVersion(url: NSURL, version: NSFileVersion): void;

  presentedItemURL(): NSURL;
  presentedItemOperationQueue(): NSOperationQueue;
  primaryPresentedItemURL(): NSURL;
  observedPresentedItemUbiquityAttributes(): NSSet<any>;
}

