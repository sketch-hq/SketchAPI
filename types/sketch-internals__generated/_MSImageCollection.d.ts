interface _MSImageCollectionUninitialized<InitializedType = _MSImageCollection> extends MSModelObjectUninitialized<_MSImageCollection> {}
interface _MSImageCollection extends MSModelObject {

  images(): NSDictionary<any, any>;
  setImages(images: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const _MSImageCollection: {
  alloc(): _MSImageCollectionUninitialized;
  class(): _MSImageCollection;
}

