import * as assert from 'proclaim'

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
      assert.strictEqual(
        settingForKey(madeupContextForTempScript(context), 'non-existing-key'),
        null
      )
    },

    shouldSetABoolean(context) {
      setSettingForKey(madeupContextForTempScript(context), 'false-key', false)
      assert.strictEqual(
        settingForKey(madeupContextForTempScript(context), 'false-key'),
        false
      )

      setSettingForKey(madeupContextForTempScript(context), 'true-key', true)
      assert.strictEqual(
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
      assert.strictEqual(
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
      assert.strictEqual(
        settingForKey(madeupContextForTempScript(context), 'undefined-key'),
        undefined
      )
    },

    shouldSetObject(context) {
      setSettingForKey(context, 'object-key', { a: 1 })
      assert.deepEqual(settingForKey(context, 'object-key'), { a: 1 })
    },
  },
}
