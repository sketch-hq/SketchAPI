const overrides = require('./typescript-overrides')

function toArray(object) {
  return Object.keys(object).map(i => object[i])
}

const macros = [
  'NS_DEPRECATED',
  'NS_DESIGNATED_INITIALIZER',
  'NS_RETURNS_INNER_POINTER',
  'NS_AUTOMATED_REFCOUNT_UNAVAILABLE',
  'NS_SWIFT_UNAVAILABLE',
  'NS_REQUIRES_NIL_TERMINATION',
  'NS_EXTENSION_UNAVAILABLE_IOS',
  'CF_RETURNS_RETAINED',
  'NS_UNAVAILABLE',
  'NS_SWIFT_NAME',
  'NS_REQUIRES_SUPER',
  'NS_REFINED_FOR_SWIFT',
  'NS_NOESCAPE',
]

const typesMap = {
  BOOL: 'boolean',

  char: 'string',
  UniChar: 'string',
  SEL: 'string',
  UTF32Char: 'string',

  int: 'number',
  short: 'number',
  'long int': 'number',
  'unsigned char': 'string',
  'unsigned short': 'number',
  'unsigned long long': 'number',
  'unsigned long long int': 'number',
  'unsigned int': 'number',
  'long long': 'number',
  'long long int': 'number',
  unsigned: 'number',
  'unsigned long': 'number',
  long: 'number',
  double: 'number',
  float: 'number',
  uint64_t: 'number',
  uint32_t: 'number',
  uint16_t: 'number',
  uint8_t: 'number',
  int64_t: 'number',
  int32_t: 'number',
  FourCharCode: 'number',
  UInt64: 'number',
  int16_t: 'number',

  id: 'any',
  CDUnknownBlockType: 'any',
  OpaqueControlRef: 'any',
  OpaqueEventRef: 'any',
  OpaqueEventHandlerCallRef: 'any',
  OpaqueWindowPtr: 'any',
  Class: 'any',
  K: 'any',

  NSArray: 'NSArray<any>',
  NSMutableArray: 'NSMutableArray<any>',
  NSSet: 'NSSet<any>',
  NSDictionary: 'NSDictionary<any, any>',
  NSMutableDictionary: 'NSMutableDictionary<any, any>',
  NSMutableOrderedSet: 'NSMutableOrderedSet<any>',
  NSMutableSet: 'NSMutableSet<any>',
  NSEnumerator: 'NSEnumerator<any>',
  NSDirectoryEnumerator: 'NSDirectoryEnumerator<any>',
  NSHashTable: 'NSHashTable<any>',
  NSCandidateListTouchBarItem: 'NSCandidateListTouchBarItem<any>',
  NSOrderedSet: 'NSOrderedSet<any>',
  NSMapTable: 'NSMapTable<any, any>',
  NSMeasurement: 'NSMeasurement<any>',
  MSLayerEnumerator: 'MSLayerEnumerator<any>',
}

function shouldSkipMethod(method, type) {
  for (const macro of macros) {
    const hasMacro = method.bridgedName.indexOf(macro) != -1
    if (hasMacro) {
      return true
    }
  }

  if (method.bridgedName.indexOf('...') != -1) {
    return true
  }
  if (
    method.bridgedName.indexOf('(') !== -1 ||
    method.bridgedName.indexOf(')') !== -1 ||
    method.bridgedName.indexOf(' ') !== -1
  ) {
    // something broken
    return true
  }

  if (method.kind == 'class' && type.protocol) {
    return true
  }

  return false
}

function typeInfo(type) {
  const methods = toArray(type.methods).filter(
    method => !shouldSkipMethod(method, type)
  )

  const name = `${type.protocol ? 'I' : ''}${type.name}${
    type.generics && type.generics.length ? `<${type.generics.join(', ')}>` : ''
  }`

  const allocatorNameExtending = `${type.name}Allocator<${
    type.generics && type.generics.length ? `${type.generics.join(', ')}, ` : ''
  }T extends ${name}>`
  const allocatorName = `${type.name}Allocator<${
    type.generics && type.generics.length ? `${type.generics.join(', ')}, ` : ''
  }T>`

  return {
    methods,
    tsKind: type.protocol ? 'interface' : 'class',
    type,
    name,
    allocatorName,
    allocatorNameExtending,
  }
}

function each(values, formatter, { newLineStart, newLineEnd } = {}) {
  const formattedValues = values.map(formatter).filter(v => v)
  if (formattedValues.length > 0) {
    return `${newLineStart ? '\n' : ''}${formattedValues.join('\n')}${
      newLineEnd ? '\n' : ''
    }`
  }
  return ''
}

function inheritance(info, classes, allocator) {
  const { type } = info
  let _inheritance = []
  if (type.extends) {
    _inheritance.push(type.extends)
  }
  _inheritance = [..._inheritance, ...type.interfaces]
  const _inheritanceWithGenerics = []

  _inheritance.forEach(x => {
    if (x === 'ObjectType' || x === 'KeyType') {
      let last = _inheritanceWithGenerics[_inheritanceWithGenerics.length - 1]
      if (!last) {
        _inheritanceWithGenerics.push(x)
        return
      }
      if (last[last.length - 1] === '>') {
        last = last.replace('>', ',')
        last += ` ${x}>`
      } else {
        last += `<${x}>`
      }
      _inheritanceWithGenerics[_inheritanceWithGenerics.length - 1] = last
    } else {
      _inheritanceWithGenerics.push(x)
    }
  })

  let extension = _inheritanceWithGenerics.shift()
  const protocols = _inheritanceWithGenerics

  protocols.forEach(p => {
    const protocol = classes[`${p}__protocol`]
    if (protocol) {
      const protocolMethods = toArray(protocol.methods).filter(
        method => !shouldSkipMethod(method, info.type)
      )
      protocolMethods.forEach(m => info.methods.push(m))
      Object.keys(protocol.properties).forEach(m => {
        if (!info.type.properties[m]) {
          // eslint-disable-next-line
          info.type.properties[m] = protocol.properties[m]
        }
      })
    }
  })

  if (
    extension &&
    extension.indexOf('<') === -1 &&
    (!classes[extension] || extension === info.type.name)
  ) {
    const protocol = classes[`${extension}__protocol`]
    extension = `I${extension}`

    if (protocol) {
      const protocolMethods = toArray(protocol.methods).filter(
        method => !shouldSkipMethod(method, info.type)
      )
      protocolMethods.forEach(m => info.methods.push(m))
      Object.keys(protocol.properties).forEach(m => {
        if (!info.type.properties[m]) {
          // eslint-disable-next-line
          info.type.properties[m] = protocol.properties[m]
        }
      })
    }

    if (!info.type.protocol) {
      // a class cannot extends an interface so implement every thing instead
      return ` implements ${extension}${
        protocols.length > 0 ? `, I${protocols.join(', I')}` : ''
      }`
    }
  }

  if (extension && typesMap[extension]) {
    extension = typesMap[extension]
  }

  if (allocator && extension) {
    if (extension.indexOf('<') !== -1) {
      extension = extension.split('<')
      const name = extension.shift()
      extension.unshift(`${name}Allocator`)
      extension = extension.join('<')
      extension = extension.split('>')
      extension.push(', T>')
      extension = extension.join('')
    } else {
      extension += 'Allocator<T>'
    }
  }

  return extension
    ? ` extends ${extension}${
        protocols.length > 0 && !allocator
          ? ` implements I${protocols.join(', I')}`
          : ''
      }`
    : ''
}

function possiblyStaticMethod(method) {
  return method.kind == 'class' ? 'static ' : ''
}

function possiblyStaticProperty(property, type) {
  return property.attributes.some(a => a === 'class')
    ? type.protocol
      ? '// static '
      : 'static '
    : ''
}

function escapeMethodName(methodName) {
  // handle .cxx_destruct method
  if (methodName.startsWith('.')) {
    return `"${methodName}"`
  }
  return methodName
}

function trimEnd(source, subStr) {
  if (source.endsWith(subStr)) {
    return source.substring(0, source.indexOf(subStr))
  }
  return source
}

const arrayRegex = /\[ *(\d*) *\]/g

function convertType(type, className) {
  let tsType = type
    .replace(/__nullable/g, '')
    .replace(/__autoreleasing/g, '')
    .replace(/_Nullable/g, '')
    .replace(/_Nonnull/g, '')
    .replace('const ', '')
    .replace('in ', '')
    .replace('inout ', '')
    .replace(/^out /, '')
    .replace('bycopy ', '')
    .replace('struct ', '')
    .replace('__weak ', '')
    .replace('nullable ', '')
    .replace('nonull ', '')
    .replace(/__nonnull/g, '')
    .replace('nonnull ', '')
    .replace('IBOutlet ', '')
    .replace('IBInspectable ', '')
    .replace('__kindof ', '')
    .replace(/__null_unspecified/g, '')
    .replace('null_unspecified ', '')
    .replace('__unsafe_unretained ', '')
    .replace('__strong ', '')
    .replace('__unused', '')
    .replace('oneway ', '')
    .trim()

  const arrayMatch = arrayRegex.exec(tsType)
  tsType = tsType.replace(arrayRegex, '').trim()

  while (tsType.endsWith('*')) {
    tsType = trimEnd(tsType, '*')
    tsType = tsType.trim()
  }

  if (tsType.indexOf('<') != -1) {
    tsType = tsType.substring(0, tsType.indexOf('<'))
    tsType = tsType.trim()
  }

  if (tsType == 'instancetype') {
    tsType = className
  }

  const mappedType = typesMap[tsType]
  if (mappedType) {
    tsType = mappedType
  }

  if (arrayMatch) {
    if (arrayMatch[1]) {
      // create tuples
      tsType = `[${Array.from(new Array(Number(arrayMatch[1])))
        .map(() => tsType)
        .join(', ')}]`
    } else {
      tsType += `[]`
    }
  }

  if (tsType.indexOf(`(^`) != -1 || tsType.indexOf(`^)`) != -1) {
    return `Block`
  }

  return tsType
}

const reservedMap = {
  class: 'className',
  function: 'functionName',
  in: 'in_',
  new: 'newObj',
}

const cocoascriptTypeAliases = {
  NSString: 'NSString | string',
  NSNumber: 'NSNumber | number',
  'NSArray<any>': 'NSArray<any> | any[]',
  'NSMutableArray<any>': 'NSMutableArray<any> | any[]',
  'NSDictionary<any, any>': 'NSDictionary<any, any> | {[key: string]: any}',
  'NSMutableDictionary<any, any>':
    'NSMutableDictionary<any, any> | {[key: string]: any}',
  MOJavaScriptObject: 'MOJavaScriptObject | Function',
  NSException: 'NSException | Error',
}

function extractArguments(method, info) {
  const usedNames = {}
  return toArray(method.args)
    .map(arg => {
      const name = reservedMap[arg.name] ? reservedMap[arg.name] : arg.name

      // check if the arg name was already used
      if (!usedNames[name]) {
        usedNames[name] = 0
      }
      usedNames[name] += 1

      const type = convertType(arg.type, info.type.name)
      if (type === 'va_list') {
        return `...${name}: any[]`
      }

      return `${
        usedNames[name] > 1 ? `${name}${usedNames[name]}` : name
      }: ${cocoascriptTypeAliases[type] || type}${
        arg.nullable ? ' | null' : ''
      }`
    })
    .join(', ')
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const initMethod = /^init/g

function checkIfMethodDefinedInExtension(method, type, classes) {
  const extension = classes[type.extends]

  if (!extension || extension.name === type.name) {
    return false
  }

  if (extension.methods[method.name]) {
    return true
  }

  return checkIfMethodDefinedInExtension(method, extension, classes)
}

function shouldIgnore(name, info) {
  return (
    overrides.shouldTSIgnoreMethods[info.type.name] &&
    overrides.shouldTSIgnoreMethods[info.type.name].indexOf(name) !== -1
  )
}

function printMethod(method, info) {
  const returnType = convertType(method.returns, info.name)
  const isInitMethod = method.bridgedName.match(initMethod)
  if (isInitMethod) {
    return ''
  }

  return `${
    shouldIgnore(method.bridgedName, info)
      ? `  // @ts-ignore
`
      : ''
  }  ${possiblyStaticMethod(method)}${escapeMethodName(method.bridgedName)}${
    returnType === info.name &&
    method.kind == 'class' &&
    info.type.generics &&
    info.type.generics.length
      ? `<${info.type.generics.join(', ')}>`
      : ''
  }${isInitMethod ? `<T extends ${info.name}>` : ''}(${extractArguments(
    method,
    info
  )}): ${isInitMethod ? 'T' : returnType};`
}

function printAllocator(info, classes) {
  if (info.type.protocol) {
    return ''
  }

  return `class ${info.allocatorNameExtending}${inheritance(
    info,
    classes,
    'Allocator<T>'
  )} {${overrides.classAdditions[`${info.type.name}Allocator`] || ''}${each(
    info.methods,
    method => {
      const isInitMethod = method.bridgedName.match(initMethod)
      if (
        !isInitMethod ||
        checkIfMethodDefinedInExtension(method, info.type, classes)
      ) {
        return ''
      }
      return `  ${escapeMethodName(method.bridgedName)}(${extractArguments(
        method,
        info
      )}): T;`
    },
    { newLineStart: true, newLineEnd: true }
  )}}
`
}

function printAlloc(info) {
  if (info.type.protocol) {
    return ''
  }

  return `
  alloc<T extends ${info.name}>(): ${info.allocatorName};`
}

module.exports = function generateDeclaration(type, classes) {
  if (typeof overrides[type.name] !== 'undefined') {
    return overrides[type.name]
  }

  if (type.struct) {
    return `declare type ${type.name} = {${each(
      type.members,
      member => `  ${member.name}: ${convertType(member.type, type.name)}`,
      { newLineStart: true }
    )}
}

`
  }

  if (type.typeAlias) {
    return `declare type ${type.name} = ${convertType(type.type, type.name)}

`
  }

  if (type.enum) {
    // eslint-disable-next-line
    type.members = type.members.map(m => {
      let value = overrides[m.value]
        ? overrides[m.value]
        : (m.value || '')
            .replace('UL)', ')')
            .replace('UL ', ' ')
            .replace('u ', ' ')
            .replace('U ', ' ')
            .replace(/UL$/, '')
            .replace('ULL ', ' ')
            .replace(/ULL$/, '')
            .replace('L ', ' ')
            .replace(/L$/, '')
      // eslint-disable-next-line
      if (isNaN(parseInt(value, 10))) {
        value = ''
      }
      return {
        ...m,
        value,
      }
    })
    return `declare enum ${type.name} {${each(
      type.members,
      member => `  ${member.name}${member.value ? ` = ${member.value}` : ''},`,
      { newLineStart: true }
    )}
}

`
  }

  const info = typeInfo(type)
  return `${printAllocator(info, classes)}declare ${info.tsKind} ${
    info.name
  }${inheritance(info, classes)} {${printAlloc(info)}
${overrides.classAdditions[type.name] || ''}${each(
    info.methods,
    method => printMethod(method, info, classes),
    {
      newLineStart: false,
      newLineEnd: true,
    }
  )}${each(
    toArray(info.type.properties),
    property =>
      `${
        shouldIgnore(property.name, info)
          ? `  // @ts-ignore
`
          : ''
      }  ${possiblyStaticProperty(property, type)}${
        property.name
      }(): ${convertType(property.type, info.name)};${
        property.attributes.indexOf('readonly') === -1
          ? `
${
              shouldIgnore(`set${capitalize(property.name)}`, info)
                ? `  // @ts-ignore
`
                : ''
            }  ${possiblyStaticProperty(property, type)}set${capitalize(
              property.name
            )}(${
              reservedMap[property.name]
                ? reservedMap[property.name]
                : property.name
            }: ${cocoascriptTypeAliases[
              convertType(property.type, info.name)
            ] || convertType(property.type, info.name)}): void;`
          : ''
      }`,
    { newLineStart: true, newLineEnd: true }
  )}}

`
}
