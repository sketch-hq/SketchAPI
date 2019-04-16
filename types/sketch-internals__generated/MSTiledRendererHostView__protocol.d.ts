interface IMSTiledRendererHostView {
  scheduleRedraw(): void;
  hasUserFocus(): boolean;
  driver(): MSRenderingDriver;
}

