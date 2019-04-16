interface MSKeyedUnarchiverUninitialized<InitializedType = MSKeyedUnarchiver> extends MSBaseUnarchiverUninitialized<MSKeyedUnarchiver> {}
interface MSKeyedUnarchiver extends MSBaseUnarchiver {

  legacyImages(): NSDictionary<any, any>;
  setLegacyImages(legacyImages: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const MSKeyedUnarchiver: {
  alloc(): MSKeyedUnarchiverUninitialized;
  class(): MSKeyedUnarchiver;  unarchiveObjectFromURL_error(url: NSURL, error: NSError): any;

}

