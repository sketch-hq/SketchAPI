interface SUPublicKeysUninitialized<InitializedType = SUPublicKeys> extends NSObjectUninitialized<SUPublicKeys> {
  initWithDsa_ed(dsa: NSString | string, ed: NSString | string): InitializedType;
}
interface SUPublicKeys extends NSObject {
  isEqualToKey(key: SUPublicKeys): boolean;

  dsaPubKey(): NSString;
  ed25519PubKey(): string;
}
declare const SUPublicKeys: {
  alloc(): SUPublicKeysUninitialized;
  class(): SUPublicKeys;
}

