interface INSEditor {
  discardEditing(): void;
  commitEditing(): boolean;
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: any | null, didCommitSelector: string | null, contextInfo: void | null): void;
  commitEditingAndReturnError(error: MOPointer<NSError>): boolean;
}

