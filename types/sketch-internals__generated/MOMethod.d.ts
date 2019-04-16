interface MOMethodUninitialized<InitializedType = MOMethod> extends NSObjectUninitialized<MOMethod> {}
interface MOMethod extends NSObject {

  target(): any;
  setTarget(target: any): void;
  selector(): string;
  setSelector(selector: string): void;
  block(): any;
  setBlock(block: any): void;
}
declare const MOMethod: {
  alloc(): MOMethodUninitialized;
  class(): MOMethod;  methodWithTarget_selector(target: any, selector: string): MOMethod;

}

