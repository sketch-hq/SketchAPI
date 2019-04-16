interface IMSInspectorValueAdaptorDelegate {
  inspectorValueAdaptor_changeValueUsingBlock(adaptor: MSInspectorValueAdaptor, block: BCVoidBlock): void;
  inspectorValueAdaptor_validateValue_forModel_context(adaptor: MSInspectorValueAdaptor, value: ModelValueType | null, model: any, context: any | null): boolean;
  inspectorValueAdaptorDidChangeValue(adaptor: MSInspectorValueAdaptor): void;
  inspectorValueAdaptor_didEncounterError(adaptor: MSInspectorValueAdaptor, error: NSError): void;
}

