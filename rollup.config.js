import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
const pkg = require('./package.json')
const camelCase = require('lodash.camelcase')

const libraryName = 'focal-redux'

export default {
  entry: `compiled/${libraryName}.js`,
  targets: [
	  { dest: pkg.main, moduleName: camelCase(libraryName), format: 'umd' },
	  { dest: pkg.module, format: 'es' }
  ],
  sourceMap: true,
  external: [],
  plugins: [
    commonjs(),
    resolve(),
    sourceMaps()
  ]
}
