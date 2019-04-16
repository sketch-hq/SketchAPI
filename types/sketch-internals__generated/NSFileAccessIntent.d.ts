interface NSFileAccessIntentUninitialized<InitializedType = NSFileAccessIntent> extends NSObjectUninitialized<NSFileAccessIntent> {}
interface NSFileAccessIntent extends NSObject {

  URL(): NSURL;
}
declare const NSFileAccessIntent: {
  alloc(): NSFileAccessIntentUninitialized;
  class(): NSFileAccessIntent;  readingIntentWithURL_options(url: NSURL, options: NSFileCoordinatorReadingOptions): NSFileAccessIntent;
  writingIntentWithURL_options(url: NSURL, options: NSFileCoordinatorWritingOptions): NSFileAccessIntent;

}

