interface SMKUSBServerConnectionUninitialized<InitializedType = SMKUSBServerConnection> extends SMKConnectionUninitialized<SMKUSBServerConnection> {
  initWithDeviceID(deviceID: NSNumber | number): InitializedType;
}

interface SMKUSBServerConnection extends SMKConnection {

  deviceID(): NSNumber;
}

declare const SMKUSBServerConnection: {
  alloc(): SMKUSBServerConnectionUninitialized;
  class(): SMKUSBServerConnection;
}

