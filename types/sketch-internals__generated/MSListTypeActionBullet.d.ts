interface MSListTypeActionBulletUninitialized<InitializedType = MSListTypeActionBullet> extends MSListTypeActionUninitialized<MSListTypeActionBullet> {}
interface MSListTypeActionBullet extends MSListTypeAction {
  setListTypeBullet(sender: any): IBAction;
}
declare const MSListTypeActionBullet: {
  alloc(): MSListTypeActionBulletUninitialized;
  class(): MSListTypeActionBullet;
}

