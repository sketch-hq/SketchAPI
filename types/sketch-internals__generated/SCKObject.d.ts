interface SCKObjectUninitialized<InitializedType = SCKObject> extends NSObjectUninitialized<SCKObject> {
  initWithData_error(data: NSData | null, error: NSError): InitializedType;
  initWithDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
  initWithDictionary_parentObject(dictionary: NSDictionary<any, any> | {[key: string]: any}, parent: SCKObject | null): InitializedType;
  initWithObjectID(objectID: SCKObjectID): InitializedType;
}
interface SCKObject extends NSObject, INSSecureCoding {

  parent(): SCKObject;
  objectID(): SCKObjectID;
  creationDate(): NSDate;
  updateDate(): NSDate;
  deletionDate(): NSDate;
  dictionaryRepresentation(): NSDictionary<any, any>;
  localizedUpdatedTimeComponentsString(): NSString;
}
declare const SCKObject: {
  alloc(): SCKObjectUninitialized;
  class(): SCKObject;
}

