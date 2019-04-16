interface MSCommandUninitialized<InitializedType = MSCommand> extends NSObjectUninitialized<MSCommand> {}
interface MSCommand extends NSObject {
  run(): any;
}
declare const MSCommand: {
  alloc(): MSCommandUninitialized;
  class(): MSCommand;  runWithArguments(block: MSCommandPreparation): any;

}

