interface NSVisualEffectViewUninitialized<InitializedType = NSVisualEffectView> extends NSViewUninitialized<NSVisualEffectView> {}
interface NSVisualEffectView extends NSView {

  material(): NSVisualEffectMaterial;
  setMaterial(material: NSVisualEffectMaterial): void;
  interiorBackgroundStyle(): NSBackgroundStyle;
  blendingMode(): NSVisualEffectBlendingMode;
  setBlendingMode(blendingMode: NSVisualEffectBlendingMode): void;
  state(): NSVisualEffectState;
  setState(state: NSVisualEffectState): void;
  maskImage(): NSImage;
  setMaskImage(maskImage: NSImage): void;
  emphasized(): boolean;
  setEmphasized(emphasized: boolean): void;
}
declare const NSVisualEffectView: {
  alloc(): NSVisualEffectViewUninitialized;
  class(): NSVisualEffectView;
}

