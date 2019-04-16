interface NSFilePromiseReceiverUninitialized<InitializedType = NSFilePromiseReceiver> extends NSObjectUninitialized<NSFilePromiseReceiver> {}
interface NSFilePromiseReceiver extends NSObject, INSPasteboardReading {
  receivePromisedFilesAtDestination_options_operationQueue_reader(destinationDir: NSURL, options: NSDictionary<any, any> | {[key: string]: any}, operationQueue: NSOperationQueue, reader: Block): void;

  fileTypes(): NSArray<any>;
  fileNames(): NSArray<any>;
}
declare const NSFilePromiseReceiver: {
  alloc(): NSFilePromiseReceiverUninitialized;
  class(): NSFilePromiseReceiver;
  readableDraggedTypes(): NSArray<any>;

}

