interface SUSignatureVerifierUninitialized<InitializedType = SUSignatureVerifier> extends NSObjectUninitialized<SUSignatureVerifier> {
  initWithPublicKeys(pkeys: SUPublicKeys): InitializedType;
}
interface SUSignatureVerifier extends NSObject {
  verifyFileAtPath_signatures(path: NSString | string, signatures: SUSignatures): boolean;
}
declare const SUSignatureVerifier: {
  alloc(): SUSignatureVerifierUninitialized;
  class(): SUSignatureVerifier;  validatePath_withSignatures_withPublicKeys(path: NSString | string, signatures: SUSignatures, pkeys: SUPublicKeys): boolean;

}

