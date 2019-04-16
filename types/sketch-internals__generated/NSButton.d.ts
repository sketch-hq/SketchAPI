interface NSButtonUninitialized<InitializedType = NSButton> extends NSControlUninitialized<NSButton> {}
interface NSButton extends NSControl, INSUserInterfaceValidations, INSAccessibilityButton, INSUserInterfaceCompression {
  setButtonType(type: NSButtonType): void;
  setPeriodicDelay_interval(delay: number, interval: number): void;
  getPeriodicDelay_interval(delay: number, interval: number): void;
  highlight(flag: boolean): void;
  performKeyEquivalent(key: NSEvent): boolean;
  compressWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): void;
  minimumSizeWithPrioritizedCompressionOptions(prioritizedOptions: NSArray<any> | any[]): NSSize;
  setNextState(): void;
  setTitleWithMnemonic(stringWithAmpersand: NSString | string): void;

  title(): NSString;
  setTitle(title: NSString | string): void;
  alternateTitle(): NSString;
  setAlternateTitle(alternateTitle: NSString | string): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  alternateImage(): NSImage;
  setAlternateImage(alternateImage: NSImage): void;
  imagePosition(): NSCellImagePosition;
  setImagePosition(imagePosition: NSCellImagePosition): void;
  imageScaling(): NSImageScaling;
  setImageScaling(imageScaling: NSImageScaling): void;
  imageHugsTitle(): boolean;
  setImageHugsTitle(imageHugsTitle: boolean): void;
  state(): NSControlStateValue;
  setState(state: NSControlStateValue): void;
  bordered(): boolean;
  setBordered(bordered: boolean): void;
  transparent(): boolean;
  setTransparent(transparent: boolean): void;
  keyEquivalent(): NSString;
  setKeyEquivalent(keyEquivalent: NSString | string): void;
  keyEquivalentModifierMask(): NSEventModifierFlags;
  setKeyEquivalentModifierMask(keyEquivalentModifierMask: NSEventModifierFlags): void;
  springLoaded(): boolean;
  setSpringLoaded(springLoaded: boolean): void;
  maxAcceleratorLevel(): NSInteger;
  setMaxAcceleratorLevel(maxAcceleratorLevel: NSInteger): void;
  bezelColor(): NSColor;
  setBezelColor(bezelColor: NSColor): void;
  contentTintColor(): NSColor;
  setContentTintColor(contentTintColor: NSColor): void;
  activeCompressionOptions(): NSUserInterfaceCompressionOptions;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  attributedAlternateTitle(): NSAttributedString;
  setAttributedAlternateTitle(attributedAlternateTitle: NSAttributedString): void;
  bezelStyle(): NSBezelStyle;
  setBezelStyle(bezelStyle: NSBezelStyle): void;
  allowsMixedState(): boolean;
  setAllowsMixedState(allowsMixedState: boolean): void;
  showsBorderOnlyWhileMouseInside(): boolean;
  setShowsBorderOnlyWhileMouseInside(showsBorderOnlyWhileMouseInside: boolean): void;
  sound(): NSSound;
  setSound(sound: NSSound): void;
}
declare const NSButton: {
  alloc(): NSButtonUninitialized;
  class(): NSButton;  buttonWithTitle_image_target_action(title: NSString | string, image: NSImage, target: any | null, action: string | null): NSButton;
  buttonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSButton;
  buttonWithImage_target_action(image: NSImage, target: any | null, action: string | null): NSButton;
  checkboxWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSButton;
  radioButtonWithTitle_target_action(title: NSString | string, target: any | null, action: string | null): NSButton;

}

