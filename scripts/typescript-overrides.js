module.exports = {
  NSDecimal: `declare type NSDecimal = any

`,
  NSHashTableCallBacks: `declare type NSHashTableCallBacks = any

`,
  NSMapTableKeyCallBacks: `declare type NSMapTableKeyCallBacks = any

`,
  NSMapTableValueCallBacks: `declare type NSMapTableValueCallBacks = any

`,
  value: ``,
  MemoryOp: ``,
  MemoryOps: ``,
  _Brflags: '',
  _BCFlags: '',
  _BCFlags2: '',
  _CFlags: '',
  _OVFlags: '',
  _SPFlags: '',
  _giflags: '',
  _TvFlags: '',
  _VFlags: '',
  _MFlags: '',
  _MVFlags: '',
  _SFlags: '',
  JSTOCLFloatPixel: '',
  nauv_key_t: '',
  ArrayType: '',
  rbffi_blocking_call_t: '',
  NSZone: `declare type NSZone = any

`,
  NSModalSession: `declare type NSModalSession = any

`,
  CGAffineTransform: `declare type CGAffineTransform = {
  a: CGFloat
  b: CGFloat
  c: CGFloat
  d: CGFloat
  tx: CGFloat
  ty: CGFloat
}

`,
  CGFloat: `declare type CGFloat = number

`,
  CGDisplayModeRef: '',
  NSAppleEventManagerSuspensionID: `declare type NSAppleEventManagerSuspensionID = any

`,
  CGDataConsumerCallbacks: ``,
  CGDataProviderRef: '',
  CGDataProviderDirectCallbacks: ``,
  CGColorRef: `declare type CGColorRef = any

`,
  CGColorConversionInfoRef: '',
  CGColorSpaceRef: `declare type CGColorSpaceRef = any

`,
  CGContextRef: `declare type CGContextRef = any

`,
  CGDataConsumerRef: '',
  CGDisplayErr: '',
  CGDeviceColor: '',
  CGDisplayConfigRef: '',
  CGDisplayStreamRef: '',
  CGDisplayStreamUpdateRef: '',
  CGEventRef: `declare type CGEventRef = any

`,
  CGEventTapProxy: '',
  CGEventTapInformation: '',
  CGEventSourceRef: '',
  CGFontRef: '',
  CGFunctionRef: '',
  CGFunctionCallbacks: '',
  CGPoint: `declare type CGPoint = {
  x: CGFloat
  y: CGFloat
}

`,
  CGSize: `declare type CGSize = {
  width: CGFloat
  height: CGFloat
}

`,
  CGVector: `declare type CGVector = {
  dx: CGFloat
  dy: CGFloat
}

`,
  CGRect: `declare type CGRect = {
  origin: CGPoint
  size: CGSize
}

`,
  CGGradientRef: `declare type CGGradientRef = any

`,
  CGImageRef: `declare type CGImageRef = any

`,
  CGLayerRef: '',
  CGPDFArrayRef: `declare type CGPDFArrayRef = any

`,
  CGPDFContentStreamRef: `declare type CGPDFContentStreamRef = any

`,
  CGPDFDictionaryRef: `declare type CGPDFDictionaryRef = any

`,
  CGPDFDocumentRef: '',
  CGPDFObjectRef: `declare type CGPDFObjectRef = any

`,
  CGPDFOperatorTableRef: '',
  CGPDFPageRef: `declare type CGPDFPageRef = any

`,
  CGPDFScannerRef: '',
  CGPDFStreamRef: `declare type CGPDFStreamRef = any

`,
  CGPDFStringRef: `declare type CGPDFStringRef = any

`,
  CGPSConverterRef: '',
  CGPSConverterCallbacks: '',
  CGPathElement: '',
  CGPatternRef: '',
  CGPatternCallbacks: '',
  CGEventErr: '',
  CGScreenUpdateMoveDelta: '',
  CGShadingRef: '',
  node: '',
  v: '',
  kAENoReply: '0x00000001',
  kAEQueueReply: '0x00000002',
  kAEWaitReply: '0x00000003',
  kAEDontReconnect: '0x00000080',
  kAEWantReceipt: '0x00000200',
  kAENeverInteract: '0x00000010',
  kAECanInteract: '0x00000020',
  kAEAlwaysInteract: '0x00000030',
  kAECanSwitchLayer: '0x00000040',
  kAEDontRecord: '0x00001000',
  kAEDontExecute: '0x00002000',
  kAEProcessNonReplyEvents: '0x00008000',
  kAEDoNotAutomaticallyAddAnnotationsToEvent: '0x00010000',
  kAEDefaultTimeout: '-1',
  kNoTimeOut: '-2',
  _pi: '',
  NSDateFormatterBehavior: `declare enum NSDateFormatterBehavior {
  NSDateFormatterBehaviorDefault = 0,
  NSDateFormatterBehavior10_0 = 1000,
}

`,
  kCFDateFormatterNoStyle: '0',
  kCFDateFormatterShortStyle: '1',
  kCFDateFormatterMediumStyle: '2',
  kCFDateFormatterLongStyle: '3',
  kCFDateFormatterFullStyle: '4',
  NSNumberFormatterBehavior: `declare enum NSNumberFormatterBehavior {
  NSNumberFormatterBehaviorDefault = 0,
  NSNumberFormatterBehavior10_0 = 1000,
}

`,
  NSPointerFunctionsOptions: `declare enum NSPointerFunctionsOptions {
  NSPointerFunctionsStrongMemory = (0 << 0),
  NSPointerFunctionsZeroingWeakMemory = (1 << 0),
  NSPointerFunctionsMallocMemory = (3 << 0),
  NSPointerFunctionsMachVirtualMemory = (4 << 0),
  NSPointerFunctionsWeakMemory = (5 << 0),
  NSPointerFunctionsObjectPersonality = (0 << 8),
  NSPointerFunctionsOpaquePersonality = (1 << 8),
  NSPointerFunctionsObjectPointerPersonality = (2 << 8),
  NSPointerFunctionsCStringPersonality = (3 << 8),
  NSPointerFunctionsStructPersonality = (4 << 8),
  NSPointerFunctionsIntegerPersonality = (5 << 8),
  NSPointerFunctionsCopyIn = (1 << 16),
}

`,
  _NSThreadPrivate: '',
  NSTextAlignment: `declare enum NSTextAlignment {
  NSTextAlignmentLeft = 0,
  NSTextAlignmentRight = 1,
  NSTextAlignmentCenter = 2,
  NSTextAlignmentJustified = 3,
  NSTextAlignmentNatural = 4,
}

`,
  FBPathElementType: `declare type FBPathElementType = any

`,
  MSPresetIteratorStruct: '',
  MSLineSegment: `declare type MSLineSegment = {
  p0: CGPoint
  p1: CGPoint
}

`,
  NSEventType: `declare enum NSEventType {
  NSEventTypeLeftMouseDown = 1,
  NSEventTypeLeftMouseUp = 2,
  NSEventTypeRightMouseDown = 3,
  NSEventTypeRightMouseUp = 4,
  NSEventTypeMouseMoved = 5,
  NSEventTypeLeftMouseDragged = 6,
  NSEventTypeRightMouseDragged = 7,
  NSEventTypeMouseEntered = 8,
  NSEventTypeMouseExited = 9,
  NSEventTypeKeyDown = 10,
  NSEventTypeKeyUp = 11,
  NSEventTypeFlagsChanged = 12,
  NSEventTypeAppKitDefined = 13,
  NSEventTypeSystemDefined = 14,
  NSEventTypeApplicationDefined = 15,
  NSEventTypePeriodic = 16,
  NSEventTypeCursorUpdate = 17,
  NSEventTypeScrollWheel = 22,
  NSEventTypeTabletPoint = 23,
  NSEventTypeTabletProximity = 24,
  NSEventTypeOtherMouseDown = 25,
  NSEventTypeOtherMouseUp = 26,
  NSEventTypeOtherMouseDragged = 27,
  NSEventTypeGesture = 29,
  NSEventTypeMagnify = 30,
  NSEventTypeSwipe = 31,
  NSEventTypeRotate = 18,
  NSEventTypeBeginGesture = 19,
  NSEventTypeEndGesture = 20,
  NSEventTypeSmartMagnify = 32,
  NSEventTypeQuickLook = 33,
  NSEventTypePressure = 34,
  NSEventTypeDirectTouch = 37,
}

`,
  NSEventMask: `declare enum NSEventMask {
  NSEventMaskLeftMouseDown = 1 << NSEventType.NSEventTypeLeftMouseDown,
  NSEventMaskLeftMouseUp = 1 << NSEventType.NSEventTypeLeftMouseUp,
  NSEventMaskRightMouseDown = 1 << NSEventType.NSEventTypeRightMouseDown,
  NSEventMaskRightMouseUp = 1 << NSEventType.NSEventTypeRightMouseUp,
  NSEventMaskMouseMoved = 1 << NSEventType.NSEventTypeMouseMoved,
  NSEventMaskLeftMouseDragged = 1 << NSEventType.NSEventTypeLeftMouseDragged,
  NSEventMaskRightMouseDragged = 1 << NSEventType.NSEventTypeRightMouseDragged,
  NSEventMaskMouseEntered = 1 << NSEventType.NSEventTypeMouseEntered,
  NSEventMaskMouseExited = 1 << NSEventType.NSEventTypeMouseExited,
  NSEventMaskKeyDown = 1 << NSEventType.NSEventTypeKeyDown,
  NSEventMaskKeyUp = 1 << NSEventType.NSEventTypeKeyUp,
  NSEventMaskFlagsChanged = 1 << NSEventType.NSEventTypeFlagsChanged,
  NSEventMaskAppKitDefined = 1 << NSEventType.NSEventTypeAppKitDefined,
  NSEventMaskSystemDefined = 1 << NSEventType.NSEventTypeSystemDefined,
  NSEventMaskApplicationDefined = 1 << NSEventType.NSEventTypeApplicationDefined,
  NSEventMaskPeriodic = 1 << NSEventType.NSEventTypePeriodic,
  NSEventMaskCursorUpdate = 1 << NSEventType.NSEventTypeCursorUpdate,
  NSEventMaskScrollWheel = 1 << NSEventType.NSEventTypeScrollWheel,
  NSEventMaskTabletPoint = 1 << NSEventType.NSEventTypeTabletPoint,
  NSEventMaskTabletProximity = 1 << NSEventType.NSEventTypeTabletProximity,
  NSEventMaskOtherMouseDown = 1 << NSEventType.NSEventTypeOtherMouseDown,
  NSEventMaskOtherMouseUp = 1 << NSEventType.NSEventTypeOtherMouseUp,
  NSEventMaskOtherMouseDragged = 1 << NSEventType.NSEventTypeOtherMouseDragged,
  NSEventMaskGesture = 1 << NSEventType.NSEventTypeGesture,
  NSEventMaskMagnify = 1 << NSEventType.NSEventTypeMagnify,
  NSEventMaskSwipe = 1 << NSEventType.NSEventTypeSwipe,
  NSEventMaskRotate = 1 << NSEventType.NSEventTypeRotate,
  NSEventMaskBeginGesture = 1 << NSEventType.NSEventTypeBeginGesture,
  NSEventMaskEndGesture = 1 << NSEventType.NSEventTypeEndGesture,
  NSEventMaskSmartMagnify = 1 << NSEventType.NSEventTypeSmartMagnify,
  NSEventMaskPressure = 1 << NSEventType.NSEventTypePressure,
  NSEventMaskDirectTouch = 1 << NSEventType.NSEventTypeDirectTouch,
  NSEventMaskAny,
}

`,
  CATransform3D: `declare type CATransform3D = {
  m11: CGFloat
  m12: CGFloat
  m13: CGFloat
  m14: CGFloat
  m21: CGFloat
  m22: CGFloat
  m23: CGFloat
  m24: CGFloat
  m31: CGFloat
  m32: CGFloat
  m33: CGFloat
  m34: CGFloat
  m41: CGFloat
  m42: CGFloat
  m43: CGFloat
  m44: CGFloat
}

`,
  NSCache: `declare type NSCache = any

`,
  CAOpenGLLayer: '',
  NSOpenGLLayer: '',
  UIButton: '',
  UIAlertView: '',
  UIActivityIndicatorView: '',
  UIImage: '',
  UIImageView: '',
  UIProgressView: '',
  UIRefreshControl: '',
  UIWebView: '',
  NSScreenAuxiliaryOpaque: '',
  InterfaceController: '',
  AppDelegate: '',
  GlobalTimelineViewController: '',
  PostTableViewCell: '',
  TodayViewController: '',
  AFImageCache: '',
  NSLayoutAnchor: `declare class NSLayoutAnchor extends NSObject implements INSCopying, INSCoding {
  constraintEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor(anchor: NSLayoutAnchor): NSLayoutConstraint;
  constraintEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  constraintGreaterThanOrEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  constraintLessThanOrEqualToAnchor_constant(anchor: NSLayoutAnchor, c: CGFloat): NSLayoutConstraint;
  copyWithZone(zone: NSZone): any;
  encodeWithCoder(aCoder: NSCoder): void;
  initWithCoder(aDecoder: NSCoder): NSLayoutAnchor;

  name(): NSString;
  setName(name: NSString): void;
  item(): any;
  setItem(item: any): void;
  hasAmbiguousLayout(): boolean;
  setHasAmbiguousLayout(hasAmbiguousLayout: boolean): void;
  constraintsAffectingLayout(): NSArray<any>;
  setConstraintsAffectingLayout(constraintsAffectingLayout: NSArray<any>): void;
}

`,
  NSLayoutXAxisAnchor: `declare class NSLayoutXAxisAnchor extends NSLayoutAnchor {
    anchorWithOffsetToAnchor(otherAnchor: NSLayoutXAxisAnchor): NSLayoutDimension;
  }

`,
  NSLayoutYAxisAnchor: `declare class NSLayoutYAxisAnchor extends NSLayoutAnchor {
    anchorWithOffsetToAnchor(otherAnchor: NSLayoutYAxisAnchor): NSLayoutDimension;
  }

`,
  NSLayoutDimension: `declare class NSLayoutDimension extends NSLayoutAnchor {
    constraintEqualToConstant(c: CGFloat): NSLayoutConstraint;
    constraintGreaterThanOrEqualToConstant(c: CGFloat): NSLayoutConstraint;
    constraintLessThanOrEqualToConstant(c: CGFloat): NSLayoutConstraint;
    constraintEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
    constraintGreaterThanOrEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
    constraintLessThanOrEqualToAnchor_multiplier(anchor: NSLayoutDimension, m: CGFloat): NSLayoutConstraint;
    constraintEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
    constraintGreaterThanOrEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
    constraintLessThanOrEqualToAnchor_multiplier_constant(anchor: NSLayoutDimension, m: CGFloat, c: CGFloat): NSLayoutConstraint;
  }

`,
  'PDFFunctionInput[kMaxComponents]': `declare type PDFFunctionInput = CGFloat[]

`,
  'PDFFunctionOutput[kMaxComponents]': `declare type PDFFunctionOutput = CGFloat[]

`,
  MSMathInspectorValueAdaptor: `declare class MSMathInspectorValueAdaptor extends MSInspectorValueAdaptor {
  initWithModelsController_floatValueGetter_floatValueSetter_modelKeyPathsToWatch(modelsController: NSArrayController, floatValueGetter: Block, floatValueSetter: Block, modelKeyPathsToWatch: NSArray<any>): MSMathInspectorValueAdaptor;
  checkAndAdjustValues_contexts_withNumberFormatter_error(values: NSArray<any>, contexts: NSPointerArray, numberFormatter: NSNumberFormatter, error: NSError): NSArray<any>;
  effectiveNumberFormatter(): NSNumberFormatter;
  currentAdjustOptions(): MSValueAdaptorAdjustOptions;
  valueFromPrefixStrippedString_forModel_originalString_error(string: NSString, model: any, originalString: NSString, error: NSError): NSNumber;
  errorWithUnparsableString(unparsable: NSString): NSError;
  trimValueString_getMathPrefix(string: NSString, prefix: NSString): NSString;
  forceRelativeMathForBlock(block: Block): void;
  clampsValues(): boolean;
  setClampsValues(clampsValues: boolean): void;
  adjustIndividually(): boolean;
  setAdjustIndividually(adjustIndividually: boolean): void;
  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  isIncrementing(): boolean;
  setIsIncrementing(isIncrementing: boolean): void;
}

`,
  SMKCommunicationController: '',
  NSXPCListenerDelegate: '',
  NSXPCConnection: '',
  SMKWebServerConnection: '',
  SMKDiskCacheDelegate: '',
  SMKDiskCache: '',
  MSNullRenderer: '',
  MSProfilingRenderer: '',
  MSProfilingRendererDelegate: '',
  CGGlyphDeprecatedEnum: '',
  NSPopoverAppearance: `declare class NSPopoverAppearance extends NSAppearance {}

`,
}

module.exports.additions = `/****** OVERRIDES ********/

// block alias
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
declare type GLenum = any
declare type GLsizei = any
declare type _CGLPBufferObject = any
declare type _CGLContextObject = any
declare type GLbitfield = any

declare type SCNetworkReachabilityRef = any

// TODO: find why this is not auto generated
declare type NSTypesetterGlyphInfo = any
declare interface IMSSliceLayerWatcher {}
declare interface IMSAllRenderers extends IMSLayerRenderer, IMSPathRenderer, IMSFillRenderer, IMSBackgroundBlurRenderer, IMSShadowRenderer, IMSGridRenderer {}
declare interface INSCollectionViewElement {}
declare interface INSAccessibilityTable {}
declare interface INSTextAttachmentContainer {}
declare interface INSTextLayoutOrientationProvider {}
declare interface IECIODelegate {}
declare interface ISCKDiff {}
declare interface IMSLayer {}

/****** AUTO GENERATED ********/

`

module.exports.additionalClasses = [
  {
    name: 'BCJSONUnarchiver',
    extends: 'NSObject',
    interfaces: [],
    methods: {},
    properties: {},
    generics: [],
  },
  {
    name: 'CHViewController',
    extends: 'NSViewController',
    interfaces: [],
    methods: {},
    properties: {},
    generics: [],
  },
  {
    name: 'WKWebView',
    extends: 'NSView',
    interfaces: [],
    methods: {},
    properties: {},
    generics: [],
  },
  {
    // class without interface
    name: 'MSPopoverDismisserView',
    extends: 'NSView',
    interfaces: [],
    methods: {},
    properties: {},
    generics: [],
  },
  {
    // swift class
    name: 'MSAlignmentEngineCycle',
    extends: null,
    interfaces: [],
    methods: {},
    properties: {},
    generics: [],
  },
]

module.exports.shouldHideMethods = {
  MSMissingFontsDialog: ['close'],
  MSWelcomeWindowController: ['close'],
  NSObject: ['objectForKeyedSubscript', 'setObject_forKeyedSubscript'],
}

module.exports.classAdditions = {
  NSDictionary: `
  [key: string]: ObjectType | Function;
`,
  NSArray: `
  [key: number]: ObjectType | Function;
  [key: string]: ObjectType | Function;
`,
  NSObject: `
  description(): NSString;
`,
}
