interface MSInspectorFooterViewsSectionUninitialized<InitializedType = MSInspectorFooterViewsSection> extends NSObjectUninitialized<MSInspectorFooterViewsSection> {}
interface MSInspectorFooterViewsSection extends NSObject, IMSInspectorSection {

  views(): NSArray<any>;
  setViews(views: NSArray<any> | any[]): void;
}
declare const MSInspectorFooterViewsSection: {
  alloc(): MSInspectorFooterViewsSectionUninitialized;
  class(): MSInspectorFooterViewsSection;
}

