interface NSInvocationOperationUninitialized<InitializedType = NSInvocationOperation> extends NSOperationUninitialized<NSInvocationOperation> {
  initWithTarget_selector_object(target: any, sel: string, arg: any | null): InitializedType;
  initWithInvocation(inv: NSInvocation): InitializedType;
}

interface NSInvocationOperation extends NSOperation {

  invocation(): NSInvocation;
  result(): any;
}

declare const NSInvocationOperation: {
  alloc(): NSInvocationOperationUninitialized;
  class(): NSInvocationOperation;
  accessInstanceVariablesDirectly(): boolean;

}

