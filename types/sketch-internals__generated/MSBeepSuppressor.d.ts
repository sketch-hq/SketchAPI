interface MSBeepSuppressorUninitialized<InitializedType = MSBeepSuppressor> extends NSObjectUninitialized<MSBeepSuppressor> {}
interface MSBeepSuppressor extends NSObject {
}
declare const MSBeepSuppressor: {
  alloc(): MSBeepSuppressorUninitialized;
  class(): MSBeepSuppressor;  failSilentlyInBlock(block: Block): void;

  shouldSuppressBeep(): boolean;

}

