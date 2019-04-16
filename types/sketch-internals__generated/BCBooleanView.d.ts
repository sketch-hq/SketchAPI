interface BCBooleanViewUninitialized<InitializedType = BCBooleanView> extends NSViewUninitialized<BCBooleanView> {}
interface BCBooleanView extends NSView, INSTableViewDataSource, INSTableViewDelegate, INSPathControlDelegate {
  onPathControl(sender: any): IBAction;
  onZoom(sender: any): IBAction;
  onDebugIntersections(sender: any): IBAction;
  onDebugCrossings(sender: any): IBAction;
  onDebugLeftContainment(sender: any): IBAction;
  onDebugRightContainment(sender: any): IBAction;
  onDebugOperation(sender: any): IBAction;
  onDebugCrossingContainment(sender: any): IBAction;
  onDebugCrossingContainmentIntersection(sender: any): IBAction;
  onDebugWhyIntersectionIsntExternalCrossing(sender: any): IBAction;
  onDebugCrossingContainmentRayWithEdge(sender: any): IBAction;
  onShowIntersectionType(sender: any): IBAction;
  onShowOverlaps(sender: any): IBAction;
  onShowContainmentRays(sender: any): IBAction;
  onShowWindingRuleContainmentRays(sender: any): IBAction;
  onShowCrossingContainmentRays(sender: any): IBAction;
  onShowExpandedXor(sender: any): IBAction;
  onShowContourJoints(sender: any): IBAction;
  onShowSuspiciousSelfCrossings(sender: any): IBAction;
  onShowWindingRuleContainmentRaysForSelection(sender: any): IBAction;
  onConvertToXor(sender: any): IBAction;
  onToggleAnimation(sender: any): IBAction;
  onPrescale(sender: any): IBAction;

  examplesTableView(): NSTableView;
  setExamplesTableView(examplesTableView: NSTableView): void;
  examplesPathControl(): NSPathControl;
  setExamplesPathControl(examplesPathControl: NSPathControl): void;
}
declare const BCBooleanView: {
  alloc(): BCBooleanViewUninitialized;
  class(): BCBooleanView;
}

