interface ICAAnimationDelegate {
  animationDidStart(anim: CAAnimation): void;
  animationDidStop_finished(anim: CAAnimation, flag: boolean): void;
}

