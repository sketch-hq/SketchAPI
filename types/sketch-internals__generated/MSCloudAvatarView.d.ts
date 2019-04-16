interface MSCloudAvatarViewUninitialized<InitializedType = MSCloudAvatarView> extends NSViewUninitialized<MSCloudAvatarView> {}
interface MSCloudAvatarView extends NSView {

  avatar(): SCKAvatar;
  setAvatar(avatar: SCKAvatar): void;
}
declare const MSCloudAvatarView: {
  alloc(): MSCloudAvatarViewUninitialized;
  class(): MSCloudAvatarView;
}

