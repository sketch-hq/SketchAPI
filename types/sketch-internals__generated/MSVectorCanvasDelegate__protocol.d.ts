interface IMSVectorCanvasDelegate {
  vectorCanvas_didHighlightHandleAtIndexPath(canvas: MSVectorCanvas, indexPath: NSIndexPath): void;
  vectorCanvas_didUnhighlightHandleAtIndexPath(canvas: MSVectorCanvas, indexPath: NSIndexPath): void;
  vectorCanvas_didSelectHandlesAtIndexPaths(canvas: MSVectorCanvas, indexPaths: NSArray<any> | any[]): void;
  vectorCanvas_didDeselectHandlesAtIndexPaths(canvas: MSVectorCanvas, indexPaths: NSArray<any> | any[]): void;
  vectorCanvasDidFinishInteractiveSelection(canvas: MSVectorCanvas): void;
  vectorCanvas_didSelectLayers(canvas: MSVectorCanvas, layers: NSArray<any> | any[]): void;
  vectorCanvasDidEditPoints(canvas: MSVectorCanvas): void;
}

