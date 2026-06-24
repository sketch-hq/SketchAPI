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
  // Align via stretching.
  Stretch: 3,
  // For an individual stack item, use the default alignment inherited from the stack.
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
        parent.verticalSizing = FlexSizing.Fit
        break
      case StackLayout.Direction.Column:
        parent.horizontalSizing = FlexSizing.Fit
        parent.verticalSizing = this.isAutomaticallySpaced
          ? FlexSizing.Fixed
          : FlexSizing.Fit
        break
    }
  }

  apply() {
    if (!this._object.parentObject()) {
      return
    }
    // Any changes to the stack layout properties will automatically mark it as
    // needing a layout update. The actual update is deferred and will be performed
    // by the parent document _eventually_. However, we want it to happen _immediately_
    // here so that callers can rely on the layout being up to date after this method returns
    const hostingLayer = wrapNativeObject(this._object.parentObject())
    hostingLayer.getParentDocument()?.processPendingChanges()
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
    if (this.wraps && alignItems === StackLayout.AlignItems.Stretch) {
      // Can't set alignItems to Stretch when wrapping is enabled
      return
    }
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
    this._object.setAllGuttersGap(Number(gap))
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

StackLayout.define('wraps', {
  get() {
    return Boolean(this._object.wrappingEnabled())
  },
  set(wraps) {
    if (wraps && this.alignItems === StackLayout.AlignItems.Stretch) {
      // Can't enable wrapping when alignItems is set to Stretch
      return
    }
    this._object.setWrappingEnabled(Boolean(wraps))
  },
})

StackLayout.define('alignContent', {
  get() {
    return Number(this._object.alignContent())
  },
  set(alignContent) {
    if (Number.isInteger(alignContent)) {
      this._object.setAlignContent(alignContent)
    }
  },
})

StackLayout.define('crossAxisGap', {
  get() {
    return Number(this._object.crossAxisGutterGap())
  },
  set(crossAxisGap) {
    this._object.setCrossAxisGutterGap(Number(crossAxisGap))
  },
})

StackLayout.Direction = StackLayoutDirection
StackLayout.JustifyContent = StackLayoutJustifyContent
StackLayout.AlignItems = StackLayoutAlignItems
StackLayout.AlignContent = StackLayoutJustifyContent

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
