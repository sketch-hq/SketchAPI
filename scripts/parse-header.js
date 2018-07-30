/* eslint-disable prefer-destructuring, no-useless-escape */
function forEachMatch(regex, data, fn) {
  let match = regex.exec(data)
  while (match !== null) {
    if (match.index === regex.lastIndex) {
      regex.lastIndex += 1 // eslint-disable-line
    }
    fn(match)
    match = regex.exec(data)
  }
}

const interfaceRegex = /@interface ([^ \n(<:]+)(<[^>]+>)?(\([^ \n]+\))?( ?: ([^ \n<]+)( ?<([^>\n]+)>)?)?([\s\S])*?@end/gm
const protocolRegex = /@protocol ([^ \n]+)( ?: ?([^ \n<]+)( ?<([^>\n]+)>)?)?([\s\S])*?@end/gm
const structRegex = /typedef struct ([^ {]* )?{([\s\S]*?)}\s*([^;]*)?;/gm
const typeAliasRegex = /typedef ([^;,\n]+|[^;,\n]+<[^;\n>]+>) ([^;\n]+);/g
const enumRegex = /typedef (?:(?:NS_OPTIONS|NS_ENUM|CF_ENUM) ?\([^,]*,([^)]*)\)|enum ([^{:]*) ?:? ?(?:[^{:]*)) ?\n?{([\s\S]*?)}([^;]*);/gm

const methodsRegex = /([+-]) \(([^\)]+)\)([^;]+);/g
const methodNameRegex = /([^:]+)(:\s?\((([^\(\)]*\([\S ]*?\^[^\(\)]*\)\s*\()*[^\)]*\)*)\)\s?([^ \n]+))*/g
const propertiesRegex = /@property ?(?:\(([^\)]+)\) )?([^,;]*(?:<[^;]+>)?)(?: |\*| \*)([^; \n]+)\s*;/g
const structMembersRegex = /([^;,]+) ([^;]+);/g
const structMemberArrayRegex = /\[(\d*)\]/g
const enumMembersRegex = /([^=,]+)=?([^,]+)?,?/g
const extendRegex = /<([^>]+)>/g

const nullableRegex = /^nullable /g
const METADATA_MACROS = /(NS_DEPRECATED_MAC|NS_DEPRECATED|NS_AVAILABLE_MAC|NS_AVAILABLE|NS_SWIFT_NAME|CF_BRIDGED_TYPE|NS_CALENDAR_ENUM_DEPRECATED|NS_ENUM_AVAILABLE_IOS|NS_SWIFT_UNAVAILABLE|NS_ENUM_AVAILABLE_MAC|NS_ENUM_DEPRECATED_MAC|NS_ENUM_AVAILABLE|NS_DEPRECATED_WITH_REPLACEMENT_MAC)\([^\)]*\)/g
const API_AVAILABLE = /(API_DEPRECATED|API_AVAILABLE|API_UNAVAILABLE)\(([^\(\)]|\([^\)]*\))*\)/g

/* eslint-disable no-param-reassign */
function parseMethodsAndProperties(data, headerData) {
  // METHODS
  forEachMatch(methodsRegex, data, match => {
    let name = ''
    const args = []
    let matchMethodName = methodNameRegex.exec(match[3])
    while (matchMethodName !== null) {
      name += `${matchMethodName[1].trim()}${matchMethodName[2] ? ':' : ''}`
      if (matchMethodName[3]) {
        const isNullable = nullableRegex.test(matchMethodName[3])
        args.push({
          name: matchMethodName[5].trim().replace(';', ''),
          type: matchMethodName[3].replace(nullableRegex, ''),
          optional: isNullable,
        })
      }
      matchMethodName = methodNameRegex.exec(match[3])
    }
    if (name.match(/\n/)) {
      // something weird here, need to investigate
      return
    }

    headerData.methods[name] = {
      name,
      bridgedName: name.replace(/:/g, '_').replace(/_$/g, ''),
      args,
      returns: match[2],
      kind: match[1] === '+' ? 'class' : 'instance',
      kindIndicator: match[1],
    }
  })

  // PROPERTIES
  forEachMatch(propertiesRegex, data, match => {
    const pointer = match[3].startsWith('*')
    const names = pointer ? match[3].slice(1) : match[3]
    names.split(',').forEach(name => {
      name = name.trim()
      if (name.indexOf(')') !== -1) {
        // that's a block, just ignore
        return
      }
      headerData.properties[name] = {
        name,
        pointer,
        type: match[2],
        attributes: match[1] ? match[1].split(',').map(a => a.trim()) : [],
      }
    })
  })
}

module.exports = function parseHeader(data) {
  data = data
    .replace(/\/\*[\s\S]*?\*\//gm, '')
    .replace(/\/\/[^\n]*/g, '')
    .replace(METADATA_MACROS, '')
    .replace(API_AVAILABLE, '')
    .replace(/ NS_NOESCAPE/g, '')
    .replace(/ __WATCHOS_PROHIBITED/, '')
    .replace(/ __TVOS_PROHIBITED/, '')
    .replace(/ NS_REFINED_FOR_SWIFT/g, '')
    .replace(/ NS_RETURNS_INNER_POINTER/g, '')
    .replace(/ NS_DESIGNATED_INITIALIZER/g, '')
    .replace(/ NS_STRING_ENUM/g, '')
    .replace(/ NS_EXTENSIBLE_STRING_ENUM/g, '')
    .replace(/ NS_TYPED_EXTENSIBLE_ENUM/g, '')
    .replace(/ _NS_TYPED_EXTENSIBLE_ENUM/g, '')
  const allHeaderData = []

  // INTERFACE
  forEachMatch(interfaceRegex, data, match => {
    const headerData = {
      name: match[1].trim(),
      extends: match[5] ? match[5].trim() : null,
      interfaces: [],
      methods: {},
      properties: {},
      generics: [],
    }

    if (headerData.name.indexOf(';') !== -1) {
      return
    }
    if (headerData.name.indexOf(',') !== -1) {
      return
    }
    if (headerData.name.indexOf(':') !== -1) {
      return
    }

    const extension = extendRegex.exec(headerData.name)
    if (extension) {
      headerData.name = headerData.name.replace(extendRegex, '')
      if (!headerData.extends) {
        headerData.extends = extension[1]
      }
    }

    if (match[7]) {
      headerData.interfaces = match[7].split(',').map(i => i.trim())
    }

    if (headerData.name === 'NSMutableArray' && headerData.interfaces.length) {
      console.log(match[0])
    }

    if (match[2]) {
      const generics = match[2]
        .replace(/^</g, '')
        .replace(/>$/g, '')
        .split(',')
        .map(g =>
          g
            .replace('__covariant ', '')
            .split(':')[0]
            .trim()
        )
        .filter(g => {
          if (g === 'NSObject') {
            if (headerData.extends) {
              headerData.interfaces.push(g)
            } else {
              headerData.extends = g
            }

            return false
          }
          return true
        })
      headerData.generics = generics
    }

    parseMethodsAndProperties(match[0], headerData)

    allHeaderData.push(headerData)
  })

  // PROTOCOL
  forEachMatch(protocolRegex, data, match => {
    const headerData = {
      protocol: true,
      name: match[1].trim(),
      extends: match[3] ? match[3].trim() : null,
      interfaces: [],
      methods: {},
      properties: {},
    }

    if (headerData.name.indexOf(';') !== -1) {
      return
    }
    if (headerData.name.indexOf(',') !== -1) {
      return
    }

    const extension = extendRegex.exec(headerData.name)
    if (extension) {
      headerData.name = headerData.name.replace(extendRegex, '')
      if (!headerData.extends) {
        headerData.extends = extension[1]
      }
    }

    if (match[5]) {
      headerData.interfaces = match[5].split(',').map(i => i.trim())
    }

    parseMethodsAndProperties(match[0], headerData)

    allHeaderData.push(headerData)
  })

  // STRUCTS
  forEachMatch(structRegex, data, match => {
    const headerData = {
      struct: true,
      name: null,
      members: [],
    }

    headerData.name = match[3].trim() || match[1].trim()

    // MEMBERS
    forEachMatch(structMembersRegex, match[2], member => {
      const pointer = member[2].startsWith('*')
      const names = pointer ? member[2].slice(1) : member[2]
      let type = member[1].trim()
      names.split(',').forEach(name => {
        name = name.trim()
        const arrayMatch = structMemberArrayRegex.exec(name)
        if (arrayMatch) {
          type += `[${arrayMatch[1]}]`
          name = name.replace(structMemberArrayRegex, '')
        }
        headerData.members.push({
          name,
          pointer,
          type,
        })
      })
    })

    allHeaderData.push(headerData)
  })

  // TYPE ALIASES
  forEachMatch(typeAliasRegex, data, match => {
    const headerData = {
      typeAlias: true,
      name: null,
      type: match[1].trim(),
      pointer: match[2].startsWith('*'),
    }

    const names = headerData.pointer ? match[2].slice(1) : match[2]

    if (names.indexOf('(') !== -1 || names.indexOf(')') !== -1) {
      // something broken
      return
    }

    names.split(',').forEach(name =>
      allHeaderData.push({
        ...headerData,
        name: name.trim(),
      })
    )
  })

  // ENUMS
  forEachMatch(enumRegex, data, match => {
    const headerData = {
      enum: true,
      name: match[1]
        ? match[1].trim()
        : match[4]
          ? match[4].trim()
          : match[2].trim(),
      members: [],
    }

    // MEMBERS
    forEachMatch(enumMembersRegex, match[3], member => {
      if (!member[1].trim()) {
        return
      }
      headerData.members.push({
        name: member[1].trim(),
        value: member[2] ? member[2].trim() : undefined,
      })
    })

    allHeaderData.push(headerData)
  })

  return allHeaderData
}
