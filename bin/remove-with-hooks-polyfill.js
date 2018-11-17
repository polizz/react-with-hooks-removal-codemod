#! /usr/bin/env node
const cp = require('child_process')
const process = require('process')
const path = require('path')

const transform = path.resolve(__dirname, '../src/react-hooks-transform.js')

console.log('running transform with arsg...', process.argv.slice(2))

cp.exec(`npx jscodeshift ${process.argv.slice(2).join(' ')} -t ${transform}`)
