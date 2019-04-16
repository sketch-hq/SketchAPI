interface NSNibOutletConnectorUninitialized<InitializedType = NSNibOutletConnector> extends NSNibConnectorUninitialized<NSNibOutletConnector> {}
interface NSNibOutletConnector extends NSNibConnector {
  establishConnection(): void;
}
declare const NSNibOutletConnector: {
  alloc(): NSNibOutletConnectorUninitialized;
  class(): NSNibOutletConnector;
}

