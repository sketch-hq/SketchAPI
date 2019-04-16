interface INSViewControllerPresentationAnimator {
  animatePresentationOfViewController_fromViewController(viewController: NSViewController, fromViewController: NSViewController): void;
  animateDismissalOfViewController_fromViewController(viewController: NSViewController, fromViewController: NSViewController): void;
}

