import { Atom } from '@grammarly/focal'
import { Store, Reducer, ReducersMapObject, Action } from 'redux'

const UPDATE_STORE = '@@UPDATE_STORE@@'
interface UpadateStoreAction<T> extends Action {
  state: T | any
}

export function subscribeStore<T>(atom: Atom<T>, store: Store<T>) {
  let shouldNotUpateStore = false
  let shouldNotUpateAtom = false

  const unsubscribeStore = store.subscribe(() => {
    if (shouldNotUpateAtom) {
      shouldNotUpateAtom = false
    } else {
      const storeState = store.getState() as any
      shouldNotUpateStore = true
      atom.modify((atomState: any) => {
        if (atomState instanceof Object && !(atomState instanceof Array)) {
          return Object.keys(atomState).reduce(
            (res, key) =>
              Object.assign(res, {
                [key]: storeState.hasOwnProperty(key) ? storeState[key] : atomState[key]
              }),
            {} as T
          )
        } else {
          return storeState
        }
      })
    }
  })

  const unsubscribeAtom = atom.subscribe(atomState => {
    if (shouldNotUpateStore) {
      shouldNotUpateStore = false
    } else {
      shouldNotUpateAtom = true
      store.dispatch({ type: UPDATE_STORE, state: atomState })
    }
  })

  return () => {
    unsubscribeStore()
    unsubscribeAtom.unsubscribe()
  }
}

export function subscribeAtom(reducer: ReducersMapObject): ReducersMapObject
export function subscribeAtom<T>(reducer: Reducer<T>): Reducer<T>
export function subscribeAtom<T>(reducer: Reducer<T> | ReducersMapObject): Reducer<T> | ReducersMapObject {
  if (typeof reducer === 'function') {
    return bindAction(reducer)
  } else {
    return Object.keys(reducer).reduce((res, key) => ({ ...res, [key]: bindAction(reducer[key], key) }), {})
  }

  function bindAction<T>(reducer: Reducer<T>, key?: string): Reducer<T> {
    return function(state: T, action: UpadateStoreAction<T>): T {
      if (action.type === UPDATE_STORE) {
        if (key) {
          return action.state.hasOwnProperty(key) ? action.state[key] : state
        } else {
          return action.state
        }
      }
      return reducer(state, action)
    }
  }
}
