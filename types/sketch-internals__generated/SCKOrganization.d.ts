interface SCKOrganizationUninitialized<InitializedType = SCKOrganization> extends SCKObjectUninitialized<SCKOrganization> {}
interface SCKOrganization extends SCKObject {

  name(): NSString;
}
declare const SCKOrganization: {
  alloc(): SCKOrganizationUninitialized;
  class(): SCKOrganization;
}

