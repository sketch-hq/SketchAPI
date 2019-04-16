interface MSHandleDrawingUninitialized<InitializedType = MSHandleDrawing> extends NSObjectUninitialized<MSHandleDrawing> {}
interface MSHandleDrawing extends NSObject {
}
declare const MSHandleDrawing: {
  alloc(): MSHandleDrawingUninitialized;
  class(): MSHandleDrawing;  drawRectAtPoint_ofType(aPoint: NSPoint, type: MSDotRectType): void;
  drawBezier(bezier: NSBezierPath): void;
  drawAtPoint_ofType_state(aPoint: NSPoint, type: MSHandleSize, state: MSHandleState): void;
  drawGradientHandleAtPoint_color_selected(aPoint: NSPoint, aColor: NSColor | null, isSelected: boolean): void;
  drawShadowForHover_inBlock(isHovering: boolean, block: BCVoidBlock): void;
  drawWithTransformStruct_aroundPoint_usingBlock(tStruct: CHTransformStruct, point: NSPoint, block: Block): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
  resetZoomValue(): void;

}

