interface MSOvalShapeActionUninitialized<InitializedType = MSOvalShapeAction> extends MSBaseShapeActionUninitialized<MSOvalShapeAction> {}
interface MSOvalShapeAction extends MSBaseShapeAction {
}
declare const MSOvalShapeAction: {
  alloc(): MSOvalShapeActionUninitialized;
  class(): MSOvalShapeAction;
}

