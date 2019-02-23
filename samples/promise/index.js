const requireInject = require('../../')

/* it injects all src sub folders in require using module-alias */
requireInject(__dirname, './src')
  .then(() => {
  /* App boot comes here, after injects */

  /*
   * injected sub folders can be called like this:
   * (e.g sub folder 'moduleOne')
  */
  console.log(require('@ModuleOne'))
})
