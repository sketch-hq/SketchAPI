interface NSScriptCoercionHandlerUninitialized<InitializedType = NSScriptCoercionHandler> extends NSObjectUninitialized<NSScriptCoercionHandler> {}
interface NSScriptCoercionHandler extends NSObject {
  coerceValue_toClass(value: any, toClass: any): any;
  registerCoercer_selector_toConvertFromClass_toClass(coercer: any, selector: string, fromClass: any, toClass: any): void;
}
declare const NSScriptCoercionHandler: {
  alloc(): NSScriptCoercionHandlerUninitialized;
  class(): NSScriptCoercionHandler;  sharedCoercionHandler(): NSScriptCoercionHandler;

}

