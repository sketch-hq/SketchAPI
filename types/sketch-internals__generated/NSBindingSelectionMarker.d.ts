interface NSBindingSelectionMarkerUninitialized<InitializedType = NSBindingSelectionMarker> extends NSObjectUninitialized<NSBindingSelectionMarker> {}
interface NSBindingSelectionMarker extends NSObject, INSCopying {
}
declare const NSBindingSelectionMarker: {
  alloc(): NSBindingSelectionMarkerUninitialized;
  class(): NSBindingSelectionMarker;
  multipleValuesSelectionMarker(): NSBindingSelectionMarker;
  noSelectionMarker(): NSBindingSelectionMarker;
  notApplicableSelectionMarker(): NSBindingSelectionMarker;

}

