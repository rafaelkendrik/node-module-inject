const moduleAlias = require('module-alias')
const path = require('path')
const fs = require('fs')

const generateAlias = str =>
  `@${str.charAt(0).toUpperCase()}${str.slice(1)}`

const getAliasesAndPaths = dir => items =>
  items.reduce((acc, item) => (
    acc[generateAlias(item)] = path.resolve(dir, item),
    acc
  ), {})

const isDirectory = path =>
  new Promise((resolve, reject) => (
    fs.stat(path, (error, stats) => (
      (!error && stats.isDirectory())
        ? resolve()
        : reject()
    ))
  ))

const isTypedFileOrHidden = item =>
  item.includes('.')

const inject = (...args) => {
  const dir = path.resolve.apply(this, args)

  return Promise.all(
    fs.readdirSync(dir)
      .filter(item => !isTypedFileOrHidden(item))
      .filter(item => isDirectory(path.resolve(dir, item)))
  )
    .then(getAliasesAndPaths(dir))
    .then(moduleAlias.addAliases)
}

module.exports = inject
