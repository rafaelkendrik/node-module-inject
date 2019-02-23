NODE REQUIRE INJECT
===================

An auto inject loader for sub folder in node require().

**motivation**:

  - I - It's hard to require modules using absolute path
  - II - I'd like something that provide auto load of sub folder, injecting them to node require

**sample**:

```
|--src
  |--moduleOne
  |--moduleTwo
```

In this example, all `src` sub folder can be imported using [node-require-inject](https://github.com/rafaelkendrik/node-require-inject):

```js
const ModuleOne = require('@ModuleOne')
const ModuleTwo = require('@ModuleTwo')
```

**installation**:
```sh
$ npm install --save rafaelkendrik/node-require-inject#master
```

**usage**:

Follow de sample folders to setup this lib, using promise or async function.

```js
const requireInject = require('require-inject')
```

**dependencies**:

  * [module-alias](https://github.com/ilearnio/module-alias)
