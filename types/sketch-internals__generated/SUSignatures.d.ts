interface SUSignaturesUninitialized<InitializedType = SUSignatures> extends NSObjectUninitialized<SUSignatures> {
  initWithDsa_ed(dsa: NSString | string, ed: NSString | string): InitializedType;
}
interface SUSignatures extends NSObject {

  dsaSignature(): NSData;
  ed25519Signature(): string;
}
declare const SUSignatures: {
  alloc(): SUSignaturesUninitialized;
  class(): SUSignatures;
}

