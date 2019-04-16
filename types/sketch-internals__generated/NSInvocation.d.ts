interface NSInvocationUninitialized<InitializedType = NSInvocation> extends NSObjectUninitialized<NSInvocation> {}
interface NSInvocation extends NSObject {
  retainArguments(): void;
  getReturnValue(retLoc: void): void;
  setReturnValue(retLoc: void): void;
  getArgument_atIndex(argumentLocation: void, idx: NSInteger): void;
  setArgument_atIndex(argumentLocation: void, idx: NSInteger): void;
  invoke(): void;
  invokeWithTarget(target: any): void;

  methodSignature(): NSMethodSignature;
  argumentsRetained(): boolean;
  target(): any;
  setTarget(target: any): void;
  selector(): string;
  setSelector(selector: string): void;
}
declare const NSInvocation: {
  alloc(): NSInvocationUninitialized;
  class(): NSInvocation;  invocationWithMethodSignature(sig: NSMethodSignature): NSInvocation;

}

