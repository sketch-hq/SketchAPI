interface MSConvertFlowToHotspotActionUninitialized<InitializedType = MSConvertFlowToHotspotAction> extends MSFlowBaseActionUninitialized<MSConvertFlowToHotspotAction> {}

interface MSConvertFlowToHotspotAction extends MSFlowBaseAction {
  convertFlowToHotspot(sender: any): IBAction;
}

declare const MSConvertFlowToHotspotAction: {
  alloc(): MSConvertFlowToHotspotActionUninitialized;
  class(): MSConvertFlowToHotspotAction;
}

