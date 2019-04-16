interface SCKUserUninitialized<InitializedType = SCKUser> extends SCKObjectUninitialized<SCKUser> {}

interface SCKUser extends SCKObject {

  name(): NSString;
  email(): NSString;
  changedEmail(): NSString;
  avatar(): SCKAvatar;
  organizations(): NSArray<any>;
}

declare const SCKUser: {
  alloc(): SCKUserUninitialized;
  class(): SCKUser;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

