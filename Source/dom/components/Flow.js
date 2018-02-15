import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { isWrappedObject, isNativeObject } from '../utils'
import { wrapObject } from '../wrapNativeObject'

// Mapping between animation type names and values.
export const AnimationType = {
  none: 'none',
  slideFromRight: 'slideFromRight',
  slideFromLeft: 'slideFromLeft',
  slideFromBottom: 'slideFromBottom',
  slideFromRop: 'slideFromRop',
  fade: 'fade',
}

export const BackTarget = 'back'

export const AnimationTypeMap = {
  none: -1,
  slideFromRight: 0,
  slideFromLeft: 1,
  slideFromBottom: 2,
  slideFromRop: 3,
  fade: 4,
}

/**
 * A MSFlowConnection. This is not exposed, only used by Layer
 */
export class Flow extends WrappedObject {
  /**
   * can accept a wide range of input:
   * - a wrapped Flow
   * - a native MSFlowConnection
   * - an object with a `target` or `targetId` property
   */
  static from(flow) {
    if (isWrappedObject(flow) && flow.type === Types.Flow) {
      return flow
    }

    if (isNativeObject(flow)) {
      const className = String(flow.class())
      if (className !== 'MSFlowConnection') {
        throw new Error(`Cannot create a flow from a ${className}`)
      }
      return Flow.fromNative(flow)
    } else if (flow && (flow.target || flow.targetId)) {
      return new Flow({
        sketchObject: MSFlowConnection.new(),
        ...flow,
      })
    }

    throw new Error('`flow` needs to be an object')
  }

  isBackAction() {
    return !!this._object.isBackAction()
  }

  isValidConnection() {
    return !!this._object.isValidFlowConnection()
  }
}

Flow.type = Types.Flow
Flow[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(Flow, MSFlowConnection)

Flow.define('targetId', {
  get() {
    return String(this._object.destinationArtboardID())
  },
  set(targetId) {
    this._object.destinationArtboardID = targetId
  },
})

Flow.define('target', {
  enumerable: false,
  exportable: false,
  get() {
    const target = this._object.destinationArtboard()
    if (target == BackTarget) {
      return BackTarget
    }
    return wrapObject(target)
  },
  set(target) {
    if (target == BackTarget) {
      this._object.destinationArtboardID = BackTarget
      return
    }
    this._object.destinationArtboardID = wrapObject(target).id
  },
})

Flow.define('animationType', {
  get() {
    const raw = this._object.animationType()
    return (
      Object.keys(AnimationTypeMap).find(
        key => AnimationTypeMap[key] === raw
      ) || raw
    )
  },
  set(animationType) {
    const translated = AnimationTypeMap[animationType]
    this._object.animationType =
      typeof translated !== 'undefined' ? translated : animationType
  },
})

// override the WrappedObject id
Flow.define('id', {
  exportable: false,
  importable: false,
  get() {
    return undefined
  },
})
