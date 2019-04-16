interface SCKAvatarUninitialized<InitializedType = SCKAvatar> extends NSObjectUninitialized<SCKAvatar> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface SCKAvatar extends NSObject {

  dictionaryRepresentation(): NSDictionary<any, any>;
  url(): NSURL;
  largeURL(): NSURL;
}
declare const SCKAvatar: {
  alloc(): SCKAvatarUninitialized;
  class(): SCKAvatar;
}

