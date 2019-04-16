interface SUCodeSigningVerifierUninitialized<InitializedType = SUCodeSigningVerifier> extends NSObjectUninitialized<SUCodeSigningVerifier> {}
interface SUCodeSigningVerifier extends NSObject {
}
declare const SUCodeSigningVerifier: {
  alloc(): SUCodeSigningVerifierUninitialized;
  class(): SUCodeSigningVerifier;  codeSignatureAtBundleURL_matchesSignatureAtBundleURL_error(oldBundlePath: NSURL, newBundlePath: NSURL, error: NSError): boolean;
  codeSignatureIsValidAtBundleURL_error(bundlePath: NSURL, error: NSError): boolean;
  bundleAtURLIsCodeSigned(bundlePath: NSURL): boolean;
  codeSignatureInfoAtBundleURL(bundlePath: NSURL): NSDictionary<any, any>;

}

