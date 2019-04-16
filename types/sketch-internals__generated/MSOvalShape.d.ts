interface MSOvalShapeUninitialized<InitializedType = MSOvalShape> extends _MSOvalShapeUninitialized<MSOvalShape> {}
interface MSOvalShape extends _MSOvalShape {
}
declare const MSOvalShape: {
  alloc(): MSOvalShapeUninitialized;
  class(): MSOvalShape;
}

