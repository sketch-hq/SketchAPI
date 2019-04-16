interface MSInspectorFlowHandlerUninitialized<InitializedType = MSInspectorFlowHandler> extends NSObjectUninitialized<MSInspectorFlowHandler> {}
interface MSInspectorFlowHandler extends NSObject, IMSFlowMenuBuilderTarget {
  flowBackAction(sender: any): IBAction;
  removeFlowAction(sender: any): IBAction;
  flowTargetAction(sender: any): IBAction;
  flowConnection(): MSFlowConnection;
  enumerateLayersAndReload(block: Block): void;

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSInspectorFlowHandler: {
  alloc(): MSInspectorFlowHandlerUninitialized;
  class(): MSInspectorFlowHandler;  flowConnectionForLayers(layers: MSLayerArray): MSFlowConnection;
  shouldShowFullInspectorForFlow(flow: MSFlowConnection): boolean;
  shouldShowFullInspectorForLayers(layers: MSLayerArray): boolean;

}

