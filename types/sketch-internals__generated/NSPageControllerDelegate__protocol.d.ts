interface INSPageControllerDelegate {
  pageController_identifierForObject(pageController: NSPageController, object: any): NSPageControllerObjectIdentifier;
  pageController_viewControllerForIdentifier(pageController: NSPageController, identifier: NSPageControllerObjectIdentifier): NSViewController;
  pageController_frameForObject(pageController: NSPageController, object: any | null): NSRect;
  pageController_prepareViewController_withObject(pageController: NSPageController, viewController: NSViewController, object: any | null): void;
  pageController_didTransitionToObject(pageController: NSPageController, object: any): void;
  pageControllerWillStartLiveTransition(pageController: NSPageController): void;
  pageControllerDidEndLiveTransition(pageController: NSPageController): void;
}

