interface IMSAlignmentEngineDelegate {
  alignmentEngine_alignPoint(engine: MSAlignmentEngine, point: NSPoint): NSPoint;
  alignmentEngine_roundPoint(engine: MSAlignmentEngine, point: NSPoint): NSPoint;
}

