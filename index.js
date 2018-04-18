'use strict'
const pkg = require('./package.json')

const nameError =
`*******************************************************************

 The package name

    ${pkg.name}

 isn't valid.

Please change it in ${__dirname}/package.json
********************************************************************`

module.exports = pkg
