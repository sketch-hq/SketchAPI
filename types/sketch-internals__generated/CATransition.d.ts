interface CATransitionUninitialized<InitializedType = CATransition> extends CAAnimationUninitialized<CATransition> {}

interface CATransition extends CAAnimation {

  type(): CATransitionType;
  setType(type: CATransitionType): void;
  subtype(): CATransitionSubtype;
  setSubtype(subtype: CATransitionSubtype): void;
  startProgress(): number;
  setStartProgress(startProgress: number): void;
  endProgress(): number;
  setEndProgress(endProgress: number): void;
  filter(): any;
  setFilter(filter: any): void;
}

declare const CATransition: {
  alloc(): CATransitionUninitialized;
  class(): CATransition;
  animation(): CATransition;
  defaultValueForKey(key: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

