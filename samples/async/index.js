const requireInject = require('../../')

;(async() => {
  /* it injects all src sub folders in require using module-alias */
  await requireInject(__dirname, './src')

  /* App boot comes here, after injects */

  /*
   * injected sub folders can be called like this:
   * (e.g sub folder 'moduleOne')
  */
  console.log(require('@ModuleOne'))
})()
