import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { subscribeStore } from 'focal-redux'
import { model } from '../model'
import reducer from '../reducers'

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
)
subscribeStore(model, store)
