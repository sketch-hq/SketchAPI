/// <reference path="./Foundation.d.ts" />

declare const __command: {
  identifier: () => INSString
  pluginBundle: () => {
    identifier: () => INSString
  }
}
