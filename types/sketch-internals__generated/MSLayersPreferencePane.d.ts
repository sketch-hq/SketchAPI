interface MSLayersPreferencePaneUninitialized<InitializedType = MSLayersPreferencePane> extends MSPreferencePaneUninitialized<MSLayersPreferencePane> {}
interface MSLayersPreferencePane extends MSPreferencePane {
}
declare const MSLayersPreferencePane: {
  alloc(): MSLayersPreferencePaneUninitialized;
  class(): MSLayersPreferencePane;
}

