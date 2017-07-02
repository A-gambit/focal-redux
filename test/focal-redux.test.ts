import { Atom } from '@grammarly/focal'
import { createStore, combineReducers } from 'redux'
import { subscribeStore, subscribeAtom } from '../src/focal-redux'

describe('focal-redux test', () => {
  const INCREMENT = 'INCREMENT'
  const DECREMENT = 'DECREMENT'
  const UPDATE_STORE = '@@UPDATE_STORE@@'

  const defaultState = { increment: 0, decrement: 0 }
  const firstState = { increment: 1, decrement: 0 }
  const secondState = { increment: 1, decrement: -1 }

  const incementAction = { type: INCREMENT }
  const updateStore = state => ({ type: UPDATE_STORE, state })

  function increment(store = 0, action) {
    return action.type === INCREMENT ? store + 1 : store
  }

  function decrement(store = 0, action) {
    return action.type === DECREMENT ? store - 1 : store
  }

  it('test subscribeAtom for store with single reducer', () => {
    const store = createStore(subscribeAtom(increment))
    store.dispatch(incementAction)
    expect(store.getState()).toBe(1)
    store.dispatch(updateStore(0))
    expect(store.getState()).toBe(0)
  })

  it('test subscribeAtom for store with combine reducer', () => {
    const store = createStore(
      combineReducers(
        subscribeAtom({
          increment,
          decrement
        })
      )
    )
    store.dispatch({ type: INCREMENT })
    expect(store.getState()).toEqual(firstState)
    store.dispatch(updateStore(0))
    expect(store.getState()).toEqual(firstState)
    store.dispatch(updateStore({ decrement: -1 }))
    expect(store.getState()).toEqual(secondState)
    store.dispatch(updateStore(defaultState))
    expect(store.getState()).toEqual(defaultState)
  })

  it('test subscribeStore for store with single reducer', () => {
    const store = createStore(subscribeAtom(increment))
    const atom = Atom.create(0)
    subscribeStore(atom, store)
    store.dispatch({ type: INCREMENT })
    expect(store.getState()).toBe(1)
    expect(atom.get()).toBe(1)
    atom.set(2)
    expect(store.getState()).toBe(2)
    expect(atom.get()).toBe(2)
  })

  it('test subscribeStore for store with combine reducer same, atom as store', () => {
    const store = createStore(
      combineReducers(
        subscribeAtom({
          increment,
          decrement
        })
      )
    )
    const atom = Atom.create({
      increment: 0,
      decrement: 0
    })
    subscribeStore(atom, store)
    store.dispatch({ type: INCREMENT })
    expect(store.getState()).toEqual(firstState)
    expect(atom.get()).toEqual(firstState)
    atom.set(secondState)
    expect(store.getState()).toEqual(secondState)
    expect(atom.get()).toEqual(secondState)
  })

  it('test subscribeStore for store with combine reducer same, atom part of store', () => {
    const store = createStore(
      combineReducers(
        subscribeAtom({
          increment,
          decrement
        })
      )
    )
    const atom = Atom.create({ increment: 0 })
    subscribeStore(atom, store)
    store.dispatch({ type: INCREMENT })
    expect(store.getState()).toEqual(firstState)
    expect(atom.get()).toEqual({ increment: 1 })
    atom.set({ increment: 0 })
    expect(store.getState()).toEqual(defaultState)
    expect(atom.get()).toEqual({ increment: 0 })
  })
})
