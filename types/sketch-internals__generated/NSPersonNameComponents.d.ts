interface NSPersonNameComponentsUninitialized<InitializedType = NSPersonNameComponents> extends NSObjectUninitialized<NSPersonNameComponents> {}
interface NSPersonNameComponents extends NSObject, INSCopying, INSSecureCoding {

  namePrefix(): NSString;
  setNamePrefix(namePrefix: NSString | string): void;
  givenName(): NSString;
  setGivenName(givenName: NSString | string): void;
  middleName(): NSString;
  setMiddleName(middleName: NSString | string): void;
  familyName(): NSString;
  setFamilyName(familyName: NSString | string): void;
  nameSuffix(): NSString;
  setNameSuffix(nameSuffix: NSString | string): void;
  nickname(): NSString;
  setNickname(nickname: NSString | string): void;
  phoneticRepresentation(): NSPersonNameComponents;
  setPhoneticRepresentation(phoneticRepresentation: NSPersonNameComponents): void;
}
declare const NSPersonNameComponents: {
  alloc(): NSPersonNameComponentsUninitialized;
  class(): NSPersonNameComponents;
}

