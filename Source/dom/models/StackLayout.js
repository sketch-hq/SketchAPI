import { DefinedPropertiesKey, WrappedObject } from '../WrappedObject'
import { wrapNativeObject } from '../wrapNativeObject'
import { Types } from '../enums'
import { Factory } from '../Factory'
import { FlexSizing } from '../layers/Layer'

export const StackLayoutDirection = Object.freeze({
  // Lay out the stack horizontally.
  Row: 0,
  // Lay out the stack vertically.
  Column: 1,
})

export const StackLayoutJustifyContent = Object.freeze({
  // Lay out from the start of the stack (e.g. left or top).
  Start: 0,
  // Center items within the stack.
  Center: 1,
  // Lay out from the start of the stack (e.g. right or bottom).
  End: 2,
  // Add spacing *between* the items so the stack is filled. `space-between` in CSS.
  Between: 3,
  // Add spacing either side of every item so the stack is filled. Visually the spacing at start
  // and end of the stack is half of the other spaces, because there's only a single item to add
  // spacing to.
  // `space-around` in CSS.
  Around: 4,
  // Add spacing between every item *and* at the start and end of the stack. `space-evenly` in CSS.
  Evenly: 5,
})

export const StackLayoutAlignItems = Object.freeze({
  // Align to the start of the cross-axis (e.g. left or top).
  Start: 0,
  // Align to the center of the cross-axis.
  Center: 1,
  // Align to the end of the cross-axis (e.g. right or bottom).
  End: 2,
  /// For an individual stack item, use the default alignment inherited from the stack.
  None: 5,
})

export class StackLayout extends WrappedObject {
  constructor(stackLayout = {}) {
    if (!stackLayout.sketchObject) {
      stackLayout.sketchObject = MSFlexGroupLayout.new()
    }
    super(stackLayout)
  }

  adjustParentGroupSizing() {
    if (!this._object.parentObject()) {
      return
    }
    const parent = wrapNativeObject(this._object.parentObject())
    switch (this.direction) {
      case StackLayout.Direction.Row:
        parent.horizontalSizing = this.isAutomaticallySpaced
          ? FlexSizing.Fixed
          : FlexSizing.Fit
        break
      case StackLayout.Direction.Column:
        parent.verticalSizing = this.isAutomaticallySpaced
          ? FlexSizing.Fixed
          : FlexSizing.Fit
        break
    }
  }
}

StackLayout.define('direction', {
  get() {
    return Number(this._object.flexDirection())
  },
  set(direction) {
    if (Number.isInteger(direction)) {
      this._object.setFlexDirection(direction)
    }
  },
})

StackLayout.define('justifyContent', {
  get() {
    return Number(this._object.justifyContent())
  },
  set(justifyContent) {
    if (Number.isInteger(justifyContent)) {
      this._object.setJustifyContent(justifyContent)
    }
  },
})

StackLayout.define('isAutomaticallySpaced', {
  exportable: false,
  importable: false,
  enumerable: false,
  get() {
    return [
      StackLayout.JustifyContent.Around,
      StackLayout.JustifyContent.Between,
      StackLayout.JustifyContent.Evenly,
    ].includes(this.justifyContent)
  },
})

StackLayout.define('alignItems', {
  get() {
    return Number(this._object.alignItems())
  },
  set(alignItems) {
    if (Number.isInteger(alignItems)) {
      this._object.setAlignItems(alignItems)
    }
  },
})

StackLayout.define('gap', {
  get() {
    return Number(this._object.allGuttersGap())
  },
  set(gap) {
    if (Number.isInteger(gap)) {
      this._object.setAllGuttersGap(gap)
    }
  },
})

const PaddingSelection = Object.freeze({
  // Uniform padding: same value for all edges
  Uniform: 0,
  // Paired padding: same value for each axis (vertical/horizontal)
  Paired: 1,
  // Individual padding values for each edge
  Individual: 2,
})
const inferPaddingSelection = (padding) => {
  if (!padding) {
    return undefined
  }
  if (typeof padding === 'number') {
    return PaddingSelection.Uniform
  }
  if (padding.vertical || padding.horizontal) {
    return PaddingSelection.Paired
  }
  if (padding.top || padding.bottom || padding.left || padding.right) {
    return PaddingSelection.Individual
  }
  return undefined
}

StackLayout.define('padding', {
  get() {
    const host = this._object.parentObject()
    if (!host) {
      return undefined
    }
    const nativePaddingSelection = Number(host.paddingSelection())
    switch (nativePaddingSelection) {
      case PaddingSelection.Uniform:
        return Number(host.topPadding())
      case PaddingSelection.Paired:
        return {
          vertical: Number(host.topPadding()),
          horizontal: Number(host.leftPadding()),
        }
      case PaddingSelection.Individual:
        return {
          top: Number(host.topPadding()),
          bottom: Number(host.bottomPadding()),
          left: Number(host.leftPadding()),
          right: Number(host.rightPadding()),
        }
      default:
        return undefined
    }
  },
  set(padding) {
    const host = this._object.parentObject()
    if (!host) {
      return
    }

    switch (inferPaddingSelection(padding)) {
      case PaddingSelection.Uniform:
        host.setPaddingSelection(PaddingSelection.Uniform)
        host.setTopPadding(padding)
        break
      case PaddingSelection.Paired:
        host.setPaddingSelection(PaddingSelection.Paired)
        if (typeof padding.vertical === 'number') {
          host.setTopPadding(padding.vertical)
        }
        if (typeof padding.horizontal === 'number') {
          host.setLeftPadding(padding.horizontal)
        }
        break
      case PaddingSelection.Individual:
        host.setPaddingSelection(PaddingSelection.Individual)
        if (typeof padding.top === 'number') {
          host.setTopPadding(padding.top)
        }
        if (typeof padding.bottom === 'number') {
          host.setBottomPadding(padding.bottom)
        }
        if (typeof padding.left === 'number') {
          host.setLeftPadding(padding.left)
        }
        if (typeof padding.right === 'number') {
          host.setRightPadding(padding.right)
        }
        break
      default:
        // Reset the padding
        host.setPaddingSelection(PaddingSelection.Uniform)
        host.setTopPadding(0)
        break
    }
  },
})

StackLayout.Direction = StackLayoutDirection
StackLayout.JustifyContent = StackLayoutJustifyContent
StackLayout.AlignItems = StackLayoutAlignItems

StackLayout.type = Types.StackLayout
StackLayout[DefinedPropertiesKey] = { ...WrappedObject[DefinedPropertiesKey] }
Factory.registerClass(StackLayout, MSFlexGroupLayout)

delete StackLayout[DefinedPropertiesKey].id

export function defineStackItemLayerProperties(Layer) {
  Layer.define('ignoresStackLayout', {
    get() {
      if (!this._object.flexItemCreatedIfNeeded) {
        return undefined
      }
      const flexItem = this._object.flexItemCreatedIfNeeded()
      if (!flexItem) {
        return undefined
      }
      return Boolean(flexItem.ignoreLayout())
    },
    set(newValue) {
      if (!this._object || !this._object.flexItemCreatedIfNeeded) {
        return
      }
      const flexItem = this._object.flexItemCreatedIfNeeded()
      if (!flexItem) {
        return
      }
      flexItem.setIgnoreLayout(newValue)
    },
  })

  Layer.define('preservesSpaceInStackLayoutWhenHidden', {
    get() {
      if (!this._object.flexItemCreatedIfNeeded) {
        return undefined
      }
      const flexItem = this._object.flexItemCreatedIfNeeded()
      if (!flexItem) {
        return undefined
      }
      return Boolean(flexItem.preserveSpaceWhenHidden())
    },
    set(newValue) {
      if (!this._object || !this._object.flexItemCreatedIfNeeded) {
        return
      }
      const flexItem = this._object.flexItemCreatedIfNeeded()
      if (!flexItem) {
        return
      }
      flexItem.setPreserveSpaceWhenHidden(newValue)
    },
  })
}
