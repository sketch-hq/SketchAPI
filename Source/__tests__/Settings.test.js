import { assertEqual } from './assert'

import { settingForKey, setSettingForKey } from '../Settings'

function madeupContextForTempScript(context) {
  if (!context.plugin) {
    // eslint-disable-next-line
    context.plugin = {
      identifier() {
        return 'temp.script'
      },
    }
  }

  return context
}

export const SettingsTests = {
  tests: {
    nonExistingSettingsShouldReturnNull(context) {
      assertEqual(
        settingForKey(madeupContextForTempScript(context), 'non-existing-key'),
        null
      )
    },

    shouldSetABoolean(context) {
      setSettingForKey(madeupContextForTempScript(context), 'false-key', false)
      assertEqual(
        settingForKey(madeupContextForTempScript(context), 'false-key'),
        false
      )

      setSettingForKey(madeupContextForTempScript(context), 'true-key', true)
      assertEqual(
        settingForKey(madeupContextForTempScript(context), 'true-key'),
        true
      )
    },

    shouldSetAString(context) {
      setSettingForKey(
        madeupContextForTempScript(context),
        'string-key',
        'test'
      )
      assertEqual(
        settingForKey(madeupContextForTempScript(context), 'string-key'),
        'test'
      )
    },

    shouldSetUndefined(context) {
      setSettingForKey(
        madeupContextForTempScript(context),
        'undefined-key',
        undefined
      )
      assertEqual(
        settingForKey(madeupContextForTempScript(context), 'undefined-key'),
        undefined
      )
    },

    shouldSetObject(context) {
      setSettingForKey(context, 'object-key', { a: 1 })
      assertEqual(settingForKey(context, 'object-key').a, 1)
    },
  },
}
