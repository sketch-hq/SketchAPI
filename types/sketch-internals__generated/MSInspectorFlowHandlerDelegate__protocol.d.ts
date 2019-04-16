interface IMSInspectorFlowHandlerDelegate {
  documentForFlowHandler(flowHandler: MSInspectorFlowHandler): MSDocument;
  layersForFlowHandler(flowHandler: MSInspectorFlowHandler): MSLayerArray;
}

