interface INSAnimatablePropertyContainer {
  animator(): INSAnimatablePropertyContainer;
  animationForKey(key: NSAnimatablePropertyKey): any;

  animations(): NSDictionary<any, any>;
  setAnimations(animations: NSDictionary<any, any> | {[key: string]: any}): void;
}

