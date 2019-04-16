interface MSOpenGLRendererUninitialized<InitializedType = MSOpenGLRenderer> extends NSObjectUninitialized<MSOpenGLRenderer> {}

interface MSOpenGLRenderer extends NSObject, IMSGPURenderer {
  scheduleDrawBlock(renderBlock: Block): void;
  beginFrameWithClearColor_drawableSize_backingScaleFactor_colorSpace(color: NSColor, drawableSize: CGSize, backingScaleFactor: CGFloat, colorSpace: CGColorSpaceRef): boolean;
  endFrameAndWaitForFrame(wait: boolean): void;
  drawColorQuadInRect_color(rect: CGRect, color: MSRGBAColor): void;
  drawColorTriangleMesh_disableOverlappingFragmentBlending(mesh: MSColorTriangleMesh, disableOverlappingFragmentBlending: boolean): void;
  drawTexturedTriangleMesh_sourceTexture(mesh: MSTexturedTriangleMesh, sourceTexture: any): void;
  drawTexturedQuadInDestinationRect_sourceTexture_bilinearFilter(destinationRect: CGRect, sourceTexture: any, bilinearFilter: boolean): void;
  drawTexturedQuadInDestinationRect_sourceTexture_sourceRect_bilinearFilter(destinationRect: CGRect, sourceTexture: any, sourceRect: CGRect, bilinearFilter: boolean): void;
  drawShadowForArtboardInRect_selected_shadow(rect: CGRect, selected: boolean, shadow: MSGPUArtboardShadow): void;
  setScissorRectWithX_y_width_height(x: number, y: number, width: number, height: number): void;
  resetScissorRect(): void;
  createTextureWithWidth_height(width: NSUInteger, height: NSUInteger): any;
  layer(): CALayer;
  requiresSynchronousRendering(): boolean;
  lockTextures(): void;
  unlockTextures(): void;
  drawColorTriangleMesh_modelViewTransform(mesh: MSColorTriangleMesh, transform: CGAffineTransform): void;
  drawArcVertexBuffer_color_modelViewTransform_backingScale(buffer: MSArcVertexBuffer, color: MSRGBAColor, transform: CGAffineTransform, backingScale: CGFloat): void;
  drawTextureVertexBuffer_sourceTexture_modelViewTransform(buffer: MSTextureVertexBuffer, sourceTexture: any, transform: CGAffineTransform): void;
  maximumTextureSize(): BCIntSize;
}

declare const MSOpenGLRenderer: {
  alloc(): MSOpenGLRendererUninitialized;
  class(): MSOpenGLRenderer;
  createWithCompletionHandler(handler: Block): MSOpenGLRenderer;
  isCompatibleWithAvailableGPUs(): boolean;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

