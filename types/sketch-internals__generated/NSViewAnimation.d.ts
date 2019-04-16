interface NSViewAnimationUninitialized<InitializedType = NSViewAnimation> extends NSAnimationUninitialized<NSViewAnimation> {
  initWithViewAnimations(viewAnimations: NSArray<any> | any[]): InitializedType;
}

interface NSViewAnimation extends NSAnimation {

  viewAnimations(): NSArray<any>;
  setViewAnimations(viewAnimations: NSArray<any> | any[]): void;
}

declare const NSViewAnimation: {
  alloc(): NSViewAnimationUninitialized;
  class(): NSViewAnimation;
  accessInstanceVariablesDirectly(): boolean;

}

