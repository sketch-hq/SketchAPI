interface BCCloudLicenseOperationUninitialized<InitializedType = BCCloudLicenseOperation> extends SCKOAuthAPIOperationUninitialized<BCCloudLicenseOperation> {}
interface BCCloudLicenseOperation extends SCKOAuthAPIOperation, IBCLicenseOperation {
}
declare const BCCloudLicenseOperation: {
  alloc(): BCCloudLicenseOperationUninitialized;
  class(): BCCloudLicenseOperation;
}

