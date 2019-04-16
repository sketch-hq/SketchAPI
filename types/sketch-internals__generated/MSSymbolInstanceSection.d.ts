interface MSSymbolInstanceSectionUninitialized<InitializedType = MSSymbolInstanceSection> extends MSBaseInspectorSectionUninitialized<MSSymbolInstanceSection> {}

interface MSSymbolInstanceSection extends MSBaseInspectorSection {

  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSSymbolInstanceSection: {
  alloc(): MSSymbolInstanceSectionUninitialized;
  class(): MSSymbolInstanceSection;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

