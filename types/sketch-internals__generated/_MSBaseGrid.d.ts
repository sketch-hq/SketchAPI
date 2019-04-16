interface _MSBaseGridUninitialized<InitializedType = _MSBaseGrid> extends MSModelObjectUninitialized<_MSBaseGrid> {}

interface _MSBaseGrid extends MSModelObject {

  isEnabled(): boolean;
  setIsEnabled(isEnabled: boolean): void;
}

declare const _MSBaseGrid: {
  alloc(): _MSBaseGridUninitialized;
  class(): _MSBaseGrid;
  immutableClass(): any;
  allowsFaulting(): boolean;
}

