interface JSTalkUninitialized<InitializedType = JSTalk> extends COScriptUninitialized<JSTalk> {}
interface JSTalk extends COScript {
}
declare const JSTalk: {
  alloc(): JSTalkUninitialized;
  class(): JSTalk;
}

