interface IMSInspectorMathValueAdaptorDelegate {
  inspectorValueAdaptorAllowFloat(adaptor: MSInspectorValueAdaptor): boolean;
  inspectorValueAdaptor_nilOperandDropInForModel_operator_operand2(adaptor: MSInspectorValueAdaptor, model: any, operator: NSString | string, operand2: CGFloat): NSNumber;
}

