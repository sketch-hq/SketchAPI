interface MSCloudAvatarViewUninitialized<InitializedType = MSCloudAvatarView> extends NSViewUninitialized<MSCloudAvatarView> {}

interface MSCloudAvatarView extends NSView {

  avatar(): SCKAvatar;
  setAvatar(avatar: SCKAvatar): void;
}

declare const MSCloudAvatarView: {
  alloc(): MSCloudAvatarViewUninitialized;
  class(): MSCloudAvatarView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

