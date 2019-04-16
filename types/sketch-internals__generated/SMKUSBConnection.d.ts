interface SMKUSBConnectionUninitialized<InitializedType = SMKUSBConnection> extends SMKConnectionUninitialized<SMKUSBConnection> {}

interface SMKUSBConnection extends SMKConnection {
}

declare const SMKUSBConnection: {
  alloc(): SMKUSBConnectionUninitialized;
  class(): SMKUSBConnection;
}

