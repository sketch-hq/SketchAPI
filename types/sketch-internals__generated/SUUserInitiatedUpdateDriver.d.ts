interface SUUserInitiatedUpdateDriverUninitialized<InitializedType = SUUserInitiatedUpdateDriver> extends SUUIBasedUpdateDriverUninitialized<SUUserInitiatedUpdateDriver> {}
interface SUUserInitiatedUpdateDriver extends SUUIBasedUpdateDriver {
}
declare const SUUserInitiatedUpdateDriver: {
  alloc(): SUUserInitiatedUpdateDriverUninitialized;
  class(): SUUserInitiatedUpdateDriver;
}

