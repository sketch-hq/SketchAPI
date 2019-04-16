interface NSNibConnectorUninitialized<InitializedType = NSNibConnector> extends NSObjectUninitialized<NSNibConnector> {}
interface NSNibConnector extends NSObject, INSCoding {
  replaceObject_withObject(oldObject: any, newObject: any): void;
  establishConnection(): void;

  source(): any;
  setSource(source: any): void;
  destination(): any;
  setDestination(destination: any): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
}
declare const NSNibConnector: {
  alloc(): NSNibConnectorUninitialized;
  class(): NSNibConnector;
}

