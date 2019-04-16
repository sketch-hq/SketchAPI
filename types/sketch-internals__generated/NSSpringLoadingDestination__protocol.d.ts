interface INSSpringLoadingDestination {
  springLoadingActivated_draggingInfo(activated: boolean, draggingInfo: any): void;
  springLoadingHighlightChanged(draggingInfo: any): void;
  springLoadingEntered(draggingInfo: any): NSSpringLoadingOptions;
  springLoadingUpdated(draggingInfo: any): NSSpringLoadingOptions;
  springLoadingExited(draggingInfo: any): void;
  draggingEnded(draggingInfo: any): void;
}

