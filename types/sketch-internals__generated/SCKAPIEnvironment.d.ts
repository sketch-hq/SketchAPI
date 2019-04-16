interface SCKAPIEnvironmentUninitialized<InitializedType = SCKAPIEnvironment> extends NSObjectUninitialized<SCKAPIEnvironment> {
  initWithHost(host: NSString | string | null): InitializedType;
  initWithName(name: NSString | string | null): InitializedType;
  initWithDefinition(definition: SCKAPIEnvironmentDefinition): InitializedType;
}
interface SCKAPIEnvironment extends NSObject, INSCopying {
  keychainAuthenticationWithError(error: NSError): SCKAPISession;
  setKeychainAuthentication_error(session: SCKAPISession | null, error: NSError): boolean;
  setCurrent(): void;

  signUpURL(): NSURL;
  resetPasswordURL(): NSURL;
  requestSignatureSecret(): NSString;
  publicKeys(): NSArray<any>;
  definition(): SCKAPIEnvironmentDefinition;
  host(): NSString;
  name(): NSString;
  displayName(): NSString;
  suffixRepresentation(): NSString;
}
declare const SCKAPIEnvironment: {
  alloc(): SCKAPIEnvironmentUninitialized;
  class(): SCKAPIEnvironment;  current(): SCKAPIEnvironment;

}

