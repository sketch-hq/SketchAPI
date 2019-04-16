interface SUAutomaticUpdateDriverUninitialized<InitializedType = SUAutomaticUpdateDriver> extends SUBasicUpdateDriverUninitialized<SUAutomaticUpdateDriver> {}
interface SUAutomaticUpdateDriver extends SUBasicUpdateDriver {
}
declare const SUAutomaticUpdateDriver: {
  alloc(): SUAutomaticUpdateDriverUninitialized;
  class(): SUAutomaticUpdateDriver;
}

