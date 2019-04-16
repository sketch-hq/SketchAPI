interface NSScriptExecutionContextUninitialized<InitializedType = NSScriptExecutionContext> extends NSObjectUninitialized<NSScriptExecutionContext> {}
interface NSScriptExecutionContext extends NSObject {

  topLevelObject(): any;
  setTopLevelObject(topLevelObject: any): void;
  objectBeingTested(): any;
  setObjectBeingTested(objectBeingTested: any): void;
  rangeContainerObject(): any;
  setRangeContainerObject(rangeContainerObject: any): void;
}
declare const NSScriptExecutionContext: {
  alloc(): NSScriptExecutionContextUninitialized;
  class(): NSScriptExecutionContext;  sharedScriptExecutionContext(): NSScriptExecutionContext;

}

