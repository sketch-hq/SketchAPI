interface NSProgressUninitialized<InitializedType = NSProgress> extends NSObjectUninitialized<NSProgress> {
  initWithParent_userInfo(parentProgressOrNil: NSProgress | null, userInfoOrNil: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSProgress extends NSObject {
  becomeCurrentWithPendingUnitCount(unitCount: number): void;
  performAsCurrentWithPendingUnitCount_usingBlock(unitCount: number, work: Block): void;
  resignCurrent(): void;
  addChild_withPendingUnitCount(child: NSProgress, inUnitCount: number): void;
  setUserInfoObject_forKey(objectOrNil: any | null, key: NSProgressUserInfoKey): void;
  cancel(): void;
  pause(): void;
  resume(): void;
  publish(): void;
  unpublish(): void;

  totalUnitCount(): number;
  setTotalUnitCount(totalUnitCount: number): void;
  completedUnitCount(): number;
  setCompletedUnitCount(completedUnitCount: number): void;
  localizedDescription(): NSString;
  setLocalizedDescription(localizedDescription: NSString | string): void;
  localizedAdditionalDescription(): NSString;
  setLocalizedAdditionalDescription(localizedAdditionalDescription: NSString | string): void;
  cancellable(): boolean;
  setCancellable(cancellable: boolean): void;
  pausable(): boolean;
  setPausable(pausable: boolean): void;
  cancelled(): boolean;
  paused(): boolean;
  indeterminate(): boolean;
  fractionCompleted(): number;
  finished(): boolean;
  userInfo(): NSDictionary<any, any>;
  kind(): NSProgressKind;
  setKind(kind: NSProgressKind): void;
  estimatedTimeRemaining(): NSNumber;
  setEstimatedTimeRemaining(estimatedTimeRemaining: NSNumber | number): void;
  throughput(): NSNumber;
  setThroughput(throughput: NSNumber | number): void;
  fileOperationKind(): NSProgressFileOperationKind;
  setFileOperationKind(fileOperationKind: NSProgressFileOperationKind): void;
  fileURL(): NSURL;
  setFileURL(fileURL: NSURL): void;
  fileTotalCount(): NSNumber;
  setFileTotalCount(fileTotalCount: NSNumber | number): void;
  fileCompletedCount(): NSNumber;
  setFileCompletedCount(fileCompletedCount: NSNumber | number): void;
  old(): boolean;
}
declare const NSProgress: {
  alloc(): NSProgressUninitialized;
  class(): NSProgress;  currentProgress(): NSProgress;
  progressWithTotalUnitCount(unitCount: number): NSProgress;
  discreteProgressWithTotalUnitCount(unitCount: number): NSProgress;
  progressWithTotalUnitCount_parent_pendingUnitCount(unitCount: number, parent: NSProgress, portionOfParentTotalUnitCount: number): NSProgress;
  addSubscriberForFileURL_withPublishingHandler(url: NSURL, publishingHandler: NSProgressPublishingHandler): any;
  removeSubscriber(subscriber: any): void;

}

