interface IMSPathLayer {
  simplify(): void;
  reversePath(): void;

  isClosed(): boolean;
  setIsClosed(isClosed: boolean): void;
  edited(): boolean;
  setEdited(edited: boolean): void;
  pathInFrame(): MSPath;
  setPathInFrame(pathInFrame: MSPath): void;
}

