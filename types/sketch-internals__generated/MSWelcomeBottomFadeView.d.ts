interface MSWelcomeBottomFadeViewUninitialized<InitializedType = MSWelcomeBottomFadeView> extends MSWelcomeTopFadeViewUninitialized<MSWelcomeBottomFadeView> {}
interface MSWelcomeBottomFadeView extends MSWelcomeTopFadeView {
}
declare const MSWelcomeBottomFadeView: {
  alloc(): MSWelcomeBottomFadeViewUninitialized;
  class(): MSWelcomeBottomFadeView;
}

