interface NSNibControlConnectorUninitialized<InitializedType = NSNibControlConnector> extends NSNibConnectorUninitialized<NSNibControlConnector> {}
interface NSNibControlConnector extends NSNibConnector {
  establishConnection(): void;
}
declare const NSNibControlConnector: {
  alloc(): NSNibControlConnectorUninitialized;
  class(): NSNibControlConnector;
}

