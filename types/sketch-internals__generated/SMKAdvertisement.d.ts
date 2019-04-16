interface SMKAdvertisementUninitialized<InitializedType = SMKAdvertisement> extends NSObjectUninitialized<SMKAdvertisement> {
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface SMKAdvertisement extends NSObject, INSCopying, INSSecureCoding {

  dictionaryRepresentation(): NSDictionary<any, any>;
  identifier(): NSUUID;
  setIdentifier(identifier: NSUUID): void;
  name(): NSString;
  setName(name: NSString | string): void;
  modelName(): NSString;
  setModelName(modelName: NSString | string): void;
}
declare const SMKAdvertisement: {
  alloc(): SMKAdvertisementUninitialized;
  class(): SMKAdvertisement;
}

