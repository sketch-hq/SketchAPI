interface SUProbingUpdateDriverUninitialized<InitializedType = SUProbingUpdateDriver> extends SUBasicUpdateDriverUninitialized<SUProbingUpdateDriver> {}
interface SUProbingUpdateDriver extends SUBasicUpdateDriver {
}
declare const SUProbingUpdateDriver: {
  alloc(): SUProbingUpdateDriverUninitialized;
  class(): SUProbingUpdateDriver;
}

