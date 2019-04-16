interface MSBitmapMagicWandEditorUninitialized<InitializedType = MSBitmapMagicWandEditor> extends MSBitmapEditorUninitialized<MSBitmapMagicWandEditor> {}

interface MSBitmapMagicWandEditor extends MSBitmapEditor {
}

declare const MSBitmapMagicWandEditor: {
  alloc(): MSBitmapMagicWandEditorUninitialized;
  class(): MSBitmapMagicWandEditor;
  accessInstanceVariablesDirectly(): boolean;

}

