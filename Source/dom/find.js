import { toArray } from 'util'
import { Document } from './models/Document'
import { wrapObject } from './wrapNativeObject'
import { Types } from './enums'
import { Factory } from './Factory'
import { colorFromString } from './style/Color'

const simpleAttribute = (attribute, opposite) => (
  operator,
  value,
  { addPredicatePart, addPredicateVar }
) => {
  addPredicatePart(`${opposite ? '!' : ''}(%K ${operator} %@)`)
  addPredicateVar(attribute)
  addPredicateVar(value)
}

const attributesMap = {
  name: simpleAttribute('name'),
  id: simpleAttribute('objectID'),
  frame: simpleAttribute('frame'),
  'frame.x': simpleAttribute('frame.x'),
  'frame.y': simpleAttribute('frame.y'),
  'frame.width': simpleAttribute('frame.width'),
  'frame.height': simpleAttribute('frame.height'),
  locked: simpleAttribute('isLocked'),
  hidden: simpleAttribute('isVisible', true),
  selected: simpleAttribute('isSelected'),
  type(operator, value, { addPredicatePart, addPredicateVar }) {
    const opposite = operator === '!='
    if (opposite) {
      // eslint-disable-next-line no-param-reassign
      operator = '='
    }
    const predicate = []
    const nativeClasses =
      Factory._typeToNative[
        value in Factory._typeAliases ? Factory._typeAliases[value].type : value
      ]
    if (!nativeClasses) {
      throw new Error(`Unknown layer type ${value}`)
    }
    nativeClasses.forEach((c) => {
      predicate.push(`className ${operator} %@`)
      addPredicateVar(String(c))
    })

    addPredicatePart(`${opposite ? '!' : ''}(${predicate.join(' OR ')})`)
  },
  'style.fills.color': (
    operator,
    value,
    { addPredicatePart, addPredicateVar }
  ) => {
    const opposite = operator === '!='
    if (opposite) {
      // eslint-disable-next-line no-param-reassign
      operator = '='
    }
    if (operator !== '=') {
      throw new Error(`Can only check for equality`)
    }
    const nativeColor = colorFromString(value)
    addPredicateVar(nativeColor)
    addPredicatePart(
      `${opposite ? '!' : ''}(ANY style.fills.color fuzzyIsEqual:%@)`
    )
  },
}

const operatorMap = {
  '=': '=',
  '*=': 'CONTAINS',
  '$=': 'ENDSWITH',
  '!=': '!=',
  '^=': 'BEGINSWITH',
  '>=': '>=',
  '=<': '=<',
  '>': '>',
  '<': '<',
}

// taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js

// http://www.w3.org/TR/css3-selectors/#whitespace
const whitespace = '[\\x20\\t\\r\\n\\f]'

// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
// with a small twist: we accept `.` for nested property path
const identifier = '(?:\\\\.|[\\w-]|[^\0-\\xa0]|\\.)+'

const operator = `(?:[*^$!]?=|>=|>|<|<=)`

const attributes = `\\[${whitespace}*(${identifier})(?:${whitespace}*(${operator})${whitespace}*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(${identifier}))|)${whitespace}*\\]`
const booleans = 'locked|hidden|selected'

const matchExpr = {
  ID: new RegExp(`^#(${identifier})`),
  TYPE: new RegExp(`^(${identifier}|[*])`),
  ATTR: new RegExp(`^${attributes}`),
  bool: new RegExp(`^(?::(not-)?(${booleans}))$`, 'i'),
}

function parseValue(value) {
  if (value === 'true') {
    return true
  }
  if (value === 'false') {
    return false
  }
  return Number(value)
}

export function find(predicate, root) {
  if (!root) {
    // eslint-disable-next-line no-param-reassign
    root = Document.getSelectedDocument()
  }
  // eslint-disable-next-line no-param-reassign
  root = wrapObject(root)
  // eslint-disable-next-line no-param-reassign
  predicate = String(predicate || '').trim()

  if (!predicate) {
    return []
  }

  const predicateParts = predicate
    .split(/,/g)
    .map((x) => x.trim())
    .filter((x) => x)

  const nativePredicateParts = []
  const predicateVars = []

  const mutations = {
    addPredicatePart(x) {
      nativePredicateParts.push(x)
    },
    addPredicateVar(x) {
      predicateVars.push(x)
    },
  }

  const FilterStragegy = Object.freeze({
    None: 'none',
    Artboard: 'artboard',
    Group: 'group',
  })

  let filterStragegy = FilterStragegy.None

  predicateParts.forEach((part) => {
    const matched = Object.keys(matchExpr).some((k) => {
      const match = matchExpr[k].exec(part)

      if (!match) {
        return false
      }

      if (k === 'ID') {
        attributesMap.id('=', match[1], mutations)
      }

      if (k === 'TYPE') {
        switch (match[1]) {
          case '*':
            nativePredicateParts.push('TRUEPREDICATE')
            break
          // Artboards no longer exist as a dedicated type. All artboards are now layer
          // groups with frame behaviour.
          case 'Artboard':
          case 'Group':
            filterStragegy = FilterStragegy[match[1]] // set filter strategy and fallthrough
          default:
            attributesMap.type('=', match[1], mutations)
            break
        }
      }

      if (k === 'ATTR') {
        const matchedOperator = operatorMap[match[2]]
        if (!matchedOperator) {
          throw new Error(`unknown operator ${match[2]}`)
        }
        const value = match[3] || match[4] || parseValue(match[5])
        const attribute = attributesMap[match[1]]
        if (!attribute) {
          throw new Error(`unknown attribute ${match[1]}`)
        }
        attribute(matchedOperator, value, mutations)
      }

      if (k === 'bool') {
        const attribute = attributesMap[match[2]]
        if (!attribute) {
          throw new Error(`unknown attribute ${match[2]}`)
        }
        attribute('=', !match[1], mutations)
      }
      return true
    })

    if (!matched) {
      throw new Error(`could not parse predicate ${part}`)
    }
  })

  const nativePredicate = NSPredicate.predicateWithFormat_argumentArray(
    nativePredicateParts.join(' AND '),
    predicateVars
  )

  const children =
    root.type == Types.Document
      ? root.sketchObject.pages().reduce((prev, page) => {
          prev.addObjectsFromArray(page.childrenIncludingSelf(true))
          return prev
        }, NSMutableArray.new())
      : root.sketchObject.childrenIncludingSelf(false)

  // Different filter strategies are used for backwards compatibility with plugins and
  // scripts that work on the concept of artboards.
  // Artboards no longer exist. Instead everything is a group with different behaviours:
  // - Regular group: implicit size based on its contents
  // - Frames: explicit size, independent of its contents, frames can exist on the canvas
  //   or inside groups. Its contents resize based on the frame size and resizing
  //   constraints.
  // - Graphics: explicit size, independent of its contents, graphics can exist on the
  //   canvas or inside groups. Its contents scale based on the group size.
  var cb = (s) => {
    // By default, return all children
    if (s == FilterStragegy.None) {
      return () => true
    }

    // The closest to artboards are canvas frames. These may be a frame or a graphic but
    // cannot be a regular group.
    const canvasFrames =
      root.type == Types.Document
        ? root.sketchObject.pages().reduce((prev, page) => {
            prev.addObjectsFromArray(page.canvasFrames())
            return prev
          }, NSMutableArray.new())
        : root.type == Types.Page
        ? root.sketchObject.canvasFrames()
        : []

    switch (s) {
      // Only include anything that is a canvas frame
      case FilterStragegy.Artboard:
        return (v) => canvasFrames.includes(v)
      // Only include anything that is not a canvas frame, i.e. a regular group
      case FilterStragegy.Group:
        return (v) => !canvasFrames.includes(v)
      // Should never happen, caught earlier
      default:
        return () => true
    }
  }

  return toArray(children.filteredArrayUsingPredicate(nativePredicate))
    .filter(cb(filterStragegy))
    .map((x) => wrapObject(x))
}
