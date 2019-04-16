interface INSDiscardableContent {
  beginContentAccess(): boolean;
  endContentAccess(): void;
  discardContentIfPossible(): void;
  isContentDiscarded(): boolean;
}

