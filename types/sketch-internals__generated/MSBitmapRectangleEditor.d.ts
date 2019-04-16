interface MSBitmapRectangleEditorUninitialized<InitializedType = MSBitmapRectangleEditor> extends MSBitmapEditorUninitialized<MSBitmapRectangleEditor> {}

interface MSBitmapRectangleEditor extends MSBitmapEditor {
  rectForLabel(): NSRect;
}

declare const MSBitmapRectangleEditor: {
  alloc(): MSBitmapRectangleEditorUninitialized;
  class(): MSBitmapRectangleEditor;
  accessInstanceVariablesDirectly(): boolean;

}

