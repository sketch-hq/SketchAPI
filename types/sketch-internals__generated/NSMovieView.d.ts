interface NSMovieViewUninitialized<InitializedType = NSMovieView> extends NSViewUninitialized<NSMovieView> {}

interface NSMovieView extends NSView, INSMenuItemValidation, INSUserInterfaceValidations {
  setMovie(movie: NSMovie): void;
  movie(): NSMovie;
  movieController(): void;
  movieRect(): NSRect;
  start(sender: any): void;
  stop(sender: any): void;
  isPlaying(): boolean;
  gotoPosterFrame(sender: any): void;
  gotoBeginning(sender: any): void;
  gotoEnd(sender: any): void;
  stepForward(sender: any): void;
  stepBack(sender: any): void;
  setRate(rate: number): void;
  rate(): number;
  setVolume(volume: number): void;
  volume(): number;
  setMuted(mute: boolean): void;
  isMuted(): boolean;
  setLoopMode(mode: NSQTMovieLoopMode): void;
  loopMode(): NSQTMovieLoopMode;
  setPlaysSelectionOnly(flag: boolean): void;
  playsSelectionOnly(): boolean;
  setPlaysEveryFrame(flag: boolean): void;
  playsEveryFrame(): boolean;
  showController_adjustingSize(show: boolean, adjustSize: boolean): void;
  isControllerVisible(): boolean;
  resizeWithMagnification(magnification: CGFloat): void;
  sizeForMagnification(magnification: CGFloat): NSSize;
  setEditable(editable: boolean): void;
  isEditable(): boolean;
  cut(sender: any): void;
  copy(sender: any): void;
  paste(sender: any): void;
  delete(sender: any): void;
  selectAll(sender: any): void;
  clear(sender: any): void;
  validateMenuItem(menuItem: NSMenuItem): boolean;
  validateUserInterfaceItem(item: any): boolean;
}

declare const NSMovieView: {
  alloc(): NSMovieViewUninitialized;
  class(): NSMovieView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

