interface NSMachPortUninitialized<InitializedType = NSMachPort> extends NSPortUninitialized<NSMachPort> {
  initWithMachPort(machPort: number): InitializedType;
  initWithMachPort_options(machPort: number, f: NSMachPortOptions): InitializedType;
}

interface NSMachPort extends NSPort {
  setDelegate(anObject: any | null): void;
  delegate(): any;
  scheduleInRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(runLoop: NSRunLoop, mode: NSRunLoopMode): void;

  machPort(): number;
}

declare const NSMachPort: {
  alloc(): NSMachPortUninitialized;
  class(): NSMachPort;
  portWithMachPort(machPort: number): NSPort;
  portWithMachPort_options(machPort: number, f: NSMachPortOptions): NSPort;
  port(): NSPort;
  accessInstanceVariablesDirectly(): boolean;

}

