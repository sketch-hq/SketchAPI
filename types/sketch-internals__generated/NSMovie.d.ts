interface NSMovieUninitialized<InitializedType = NSMovie> extends NSObjectUninitialized<NSMovie> {
  initWithMovie(movie: QTMovie): InitializedType;
  initWithURL_byReference(url: NSURL, byRef: boolean): InitializedType;
  initWithPasteboard(pasteboard: NSPasteboard): InitializedType;
}
interface NSMovie extends NSObject, INSCopying, INSCoding {
  QTMovie(): QTMovie;
  URL(): NSURL;
}
declare const NSMovie: {
  alloc(): NSMovieUninitialized;
  class(): NSMovie;  movieUnfilteredFileTypes(): NSArray<any>;
  movieUnfilteredPasteboardTypes(): NSArray<any>;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;

}

