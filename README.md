# Focal-Redux


[![npm Version](https://img.shields.io/npm/v/focal-redux.svg)](https://www.npmjs.com/package/focal-redux) ![License](https://img.shields.io/npm/l/focal-redux.svg)
[![Build Status](https://travis-ci.org/grammarly/focal-redux.svg?branch=master)](https://travis-ci.org/grammarly/focal-redux)

`Focal-Redux` allows you to use all the power of [Focal](https://github.com/grammarly/focal) in a Redux application.
It helps you to implement Focal's `Atom` in the Redux application by simplifying the code refactoring when you want to switch from Redux to Focal.
Futhermore, you can use all the advantages of both state-management in your application.
For example, Focal can help you with large collections of data or form management, and so on.

### Installation

```sh
$ yarn add focal-redux
```

or

```sh
$ npm install --save focal-redux
```

### Usage

#### First Step

You should wrap your `Reducer` or `ReducersMapObject` with `subscribeAtom` function.
This function will automaticaly add action `@@UPDATE_STORE@@` which will be dispatched when your atom updates.

```js
import {subscribeStore} from 'focal-redux'

// Reducer:
subscribeAtom(reducer)

// ReducersMapObject
combineReducer(subscribeAtom({ //reducers }))
```

#### First Step

You should subscribe your atom to store using `subscribeStore` function:

```js
subscribeStore(atom, store)
```

### NPM scripts

- `npm start`: Runs `npm run build` in watch mode
- `npm run test`: Run test suite
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run build`: Generage bundles and typings
- `npm run lint`: Lints code

### Contributing

If you think that we are missing any key features, please open a GitHub issue, or even better, a pull request. Any feedback you have about using `focal-redux` would be greatly appreciated.
