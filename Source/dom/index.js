import { AnimationType, BackTarget } from './models/Flow'
import './models/DataOverride'

export {
  exportObject as export,
  objectFromJSON as fromSketchJSON,
} from './export'

export { layerFromString, layerFromData } from './import'

export { Document, getDocuments, getSelectedDocument } from './models/Document'
export { Library, getLibraries } from './models/Library'
export { SharedStyle } from './models/SharedStyle'
export { Rectangle } from './models/Rectangle'

export { Style } from './style/Style'

export { Group } from './layers/Group'
export { Text } from './layers/Text'
export { Image } from './layers/Image'
export { Shape } from './layers/Shape'
export { ShapePath } from './layers/ShapePath'
export { Artboard } from './layers/Artboard'
export { Page } from './layers/Page'
export { SymbolMaster } from './layers/SymbolMaster'
export { SymbolInstance } from './layers/SymbolInstance'
export { HotSpot } from './layers/HotSpot'
export { Slice } from './layers/Slice'

export { Types } from './enums'
export { wrapObject as fromNative } from './wrapNativeObject'
export { getGlobalColors, getGlobalGradients } from './globalAssets'

export const Flow = {
  AnimationType,
  BackTarget,
}

export const version = {
  sketch: MSApplicationMetadata.metadata().appVersion,
  api: process.env.API_VERSION,
}
