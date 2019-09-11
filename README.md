NODE MODULE INJECT
===================

A sub folder auto loader for node require().

**motivation**:

  - I - It's hard to require modules using absolute path only
  - II - I'd like something that provides sub folder auto loading, injecting them to node require()

**sample**:

```
|--src
  |--moduleOne
  |--moduleTwo
```

In this example using [node-require-inject](https://github.com/rafaelkendrik/node-require-inject), all the sub folders of `src` are injected to node require() and can be imported using their aliases:

```js
const ModuleOne = require('@ModuleOne')
const ModuleTwo = require('@ModuleTwo')
```

**installation**:
```sh
$ npm install --save rafaelkendrik/node-require-inject#master
```

**usage**:

Follow de sample folders to setup this lib, using `promise` or `async function`.

```js
const requireInject = require('require-inject')
```

**dependencies**:

  * [module-alias](https://github.com/ilearnio/module-alias)
