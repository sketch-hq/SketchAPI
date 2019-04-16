interface MSEditArtboardPresetViewControllerUninitialized<InitializedType = MSEditArtboardPresetViewController> extends NSViewControllerUninitialized<MSEditArtboardPresetViewController> {}

interface MSEditArtboardPresetViewController extends NSViewController {

  preset(): MSArtboardPreset;
  setPreset(preset: MSArtboardPreset): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSEditArtboardPresetViewController: {
  alloc(): MSEditArtboardPresetViewControllerUninitialized;
  class(): MSEditArtboardPresetViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

