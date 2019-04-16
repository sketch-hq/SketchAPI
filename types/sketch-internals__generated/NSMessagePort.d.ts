interface NSMessagePortUninitialized<InitializedType = NSMessagePort> extends NSPortUninitialized<NSMessagePort> {}

interface NSMessagePort extends NSPort {
}

declare const NSMessagePort: {
  alloc(): NSMessagePortUninitialized;
  class(): NSMessagePort;
  port(): NSPort;
  accessInstanceVariablesDirectly(): boolean;

}

