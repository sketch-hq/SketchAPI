interface SMKWebConnectionUninitialized<InitializedType = SMKWebConnection> extends SMKConnectionUninitialized<SMKWebConnection> {
  initWithAdvertisement(advertisement: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}

interface SMKWebConnection extends SMKConnection {
  destroy(): void;

  advertisement(): NSDictionary<any, any>;
  setAdvertisement(advertisement: NSDictionary<any, any> | {[key: string]: any}): void;
  advertising(): boolean;
  setAdvertising(advertising: boolean): void;
}

declare const SMKWebConnection: {
  alloc(): SMKWebConnectionUninitialized;
  class(): SMKWebConnection;
}

