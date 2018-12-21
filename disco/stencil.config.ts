import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import builtins from 'rollup-plugin-node-builtins'
import globals from 'rollup-plugin-node-globals'

export const config: Config = {
  namespace: 'disco',
  copy: [
    { src: 'layout-demo' }
  ],
  plugins: [
    builtins(),
    globals(),
    sass({
      injectGlobalPaths: [
        'src/globals/variables.scss',
        'src/globals/mixins.scss'
      ]
    })
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
}
