// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(await antfu({
  stylistic: true,
  rules: {
    'style/comma-dangle': ['error', 'never'],
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }]
  }
}))
