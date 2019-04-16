interface CAAnimationGroupUninitialized<InitializedType = CAAnimationGroup> extends CAAnimationUninitialized<CAAnimationGroup> {}

interface CAAnimationGroup extends CAAnimation {

  animations(): NSArray<any>;
  setAnimations(animations: NSArray<any> | any[]): void;
}

declare const CAAnimationGroup: {
  alloc(): CAAnimationGroupUninitialized;
  class(): CAAnimationGroup;
  animation(): CAAnimationGroup;
  defaultValueForKey(key: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

