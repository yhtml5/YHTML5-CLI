'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/cmd/index.min.js')
} else {
  module.exports = require('./dist/cmd/index.js')
}