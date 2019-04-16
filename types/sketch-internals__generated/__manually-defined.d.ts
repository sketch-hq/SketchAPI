/****** OVERRIDES ********/

// block alias
declare type IMP = any
declare type objc_selector = any
declare type Block = any
declare type BCVoidBlock = Block
declare type CHStringAttributesCompareBlock = Block
declare type CHStringWordEnumeratorBlock = Block
declare type BCDictionaryFilterBlock = Block
declare type CGContextDrawBlock = Block
declare type BCTimerBlock = Block
declare type BCConcurrentMapCompletionBlock = Block
declare type BCSumBlock = Block
declare type BCMapTableFilterBlock = Block
declare type MSDocumentIteratorBlock = Block
declare type ECTestComparisonBlock = Block
declare type MSPreviewGeneratorBlock = Block
declare type MSLayerFilterBlock = Block
declare type MSSelectionModifierBlock = Block
declare type MSLayerIteratorBlock = Block
declare type MSLayerIteratorTestBlock = Block
declare type MSRenameSharedObjectBlock = Block
declare type BCMagnifierCompletionBlock = Block
declare type FBCurveIntersectionBlock = Block
declare type BCCacheCreateObjectBlock = Block
declare type ProgressBlock = Block
declare type MSLayerEnumeratorBlock = Block
declare type MSLayerSimpleEnumeratorBlock = Block
declare type MSUndoActionBlock = Block
declare type imageGenerationBlock = Block
declare type MSColorFinderCompletionBlock = Block
declare type MSWebExporterCompletionBlock = Block
declare type MSFlashViewControllerBlock = Block
declare type MSFlashControllerHelpBlock = Block
declare type MSColorConvertibleHandler = Block
declare type MSDataApplierBlock = Block
declare type MSManifestImageProviderBlock = Block
declare type MSAveragingRenderMonitorUpdateBlock = Block
declare type MSAttributeConverterBlock = Block
declare type MSActionFakeActionBlock = Block
declare type NSComparator = Block
declare type MSDocumentPreviewImageHandler = Block
declare type MSAnimationBlock = Block
declare type MSColorInspectorSetupBlock = Block
declare type MSCreateSymbolCompletionBlock = Block
declare type MSExportManagerSliceCompletionBlock = Block
declare type MSFontFamilyPickerCompletionBlock = Block
declare type MSInsertTextEventHandlerCompletionBlock = Block
declare type NSItemProviderLoadHandler = Block
declare type NSItemProviderCompletionHandler = Block
declare type MSBezierPathModifierBlock = Block
declare type MSPasteboardItemWritingBlock = Block
declare type MSPreviewImageHandler = Block
declare type dispatch_block_t = Block
declare type MSSaveAsTemplateSheetCompletionBlock = Block
declare type NSProgressPublishingHandler = Block
declare type NSUserScriptTaskCompletionHandler = Block
declare type NSUserUnixTaskCompletionHandler = Block
declare type NSUserAppleScriptTaskCompletionHandler = Block
declare type NSUserAutomatorTaskCompletionHandler = Block
declare type GradientInterpolationFunction = Block
declare type BCOutlineViewControllerPostRefreshBlock = Block
declare type FMDBExecuteStatementsCallbackBlock = Block
declare type CGPDFOperatorCallback = Block
declare type ArgumentBlock = Block
declare type BITCustomCrashReportUIHandler = Block
declare type BITCrashManagerPostCrashSignalCallback = Block
declare type BITLogHandler = Block
declare type MSNetworkTimeCompletionBlock = Block
declare type SCKDownloadOperationHandler = Block
declare type MSTextSectionParagraphEnumerator = Block
declare type MSTextSectionStringEnumerator = Block
declare type MSForeignObjectCollectionFilter = Block
declare type MSRenderMonitorHook = Block
declare type MSLineShapeCreatorBlock = Block
declare type MSCommandPreparation = Block
declare type MSDataPropertyEnumerator = Block
declare type MSDescendantEnumerator = Block
declare type MSToolCompletionHandler = Block

// C types
declare type CGPath = any
declare type NSFetchRequest = any
declare type NSManagedObjectModel = any
declare type NSAttributeType = number
declare type NSEntityDescription = any

// CORE SERVICES TYPES
declare type DescType = any
declare type OSType = any
declare type SInt32 = number
declare type AEEventClass = any
declare type AEEventID = any
declare type AEReturnID = any
declare type AETransactionID = any
declare type pid_t = any
declare type AEDesc = any
declare type AEKeyword = any
declare type AppleEvent = any
declare type SRefCon = any
declare type OSErr = any
declare type OSStatus = any

// JAVASCRIPT CORE TYPES
declare type JSValueRef = any
declare type JSContextRef = any
declare type JSObjectRef = JSValueRef
declare type JSGlobalContextRef = JSContextRef
declare type JSPropertyAttributes = any
declare type JSClassRef = any
declare type MOObjCOwnershipRule = any
declare type ffi_type = any

// CORE DATA TYPES
declare type NSManagedObjectContext = any

// Webkit
declare interface IWebUIDelegate {}
declare interface IWebResourceLoadDelegate {}
declare interface IWebFrameLoadDelegate {}
declare interface IWKExtensionDelegate {}

declare type IBAction = any
declare type Protocol = any

declare type FBFloat = CGFloat
declare type FBPoint = NSPoint
declare type FBSize = NSSize
declare type FBRect = NSRect
declare type FBBezierPath = NSBezierPath

declare type CFTimeInterval = number
declare type CVTimeStamp = number
declare type CFTypeRef = any

declare type dispatch_group_t = any
declare type dispatch_queue_t = any
declare type uuid_t = any
declare type au_asid_t = any
declare type uid_t = any
declare type gid_t = any
declare type int16_t = any
declare type size_t = any

// METAL TYPES
declare type MTLPixelFormat = number
declare type MTLClearColor = {
  red: number
  green: number
  blue: number
  alpha: number
}

declare type mach_port_t = number
declare type sockaddr_ = number

declare type compression_algorithm = any
declare type dispatch_data_t = any

declare type CKShare = any
declare type CKContainer = any
declare type CKShareMetadata = any

declare type SecIdentityRef = any
declare type SecTrustRef = any
declare type SSLProtocol = any

declare type CIFilter = any
declare type CIContext = any

declare type IconRef = any
declare type QTMovie = any

declare type _CGLPixelFormatObject = any
declare type GLint = any
declare type GLuint = any
declare type GLenum = any
declare type GLsizei = any
declare type _CGLPBufferObject = any
declare type _CGLContextObject = any
declare type GLbitfield = any

declare type SCNetworkReachabilityRef = any

// TODO: find why this is not auto generated
type NSTypesetterGlyphInfo = any
interface IMSSliceLayerWatcher {}
interface IMSAllRenderers extends IMSLayerRenderer, IMSPathRenderer, IMSFillRenderer, IMSBackgroundBlurRenderer, IMSShadowRenderer, IMSGridRenderer {}
interface INSCollectionViewElement {}
interface INSAccessibilityTable {}
interface INSTextAttachmentContainer {}
interface INSTextLayoutOrientationProvider {}
interface IECIODelegate {}
interface ISCKDiff {}
interface IMSLayer {}
interface NSOpenGLLayer extends CALayer {}
interface NSOpenGLLayerUninitialized<InitializedType = NSOpenGLLayer> extends CALayerUninitialized<NSOpenGLLayer> {}
type NSAccessibilityAttributeName = any
declare const NSApp: NSApplication

/****** AUTO GENERATED ********/

