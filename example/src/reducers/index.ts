import {
  START_SEARCH_REPOSITORIES,
  ERROR_SEARCH_REPOSITORIES,
  FETCH_SEARCH_REPOSITORIES
} from '../constants'

import { subscribeAtom } from 'focal-redux'
import { Action } from 'redux'

interface A extends Action {
  type: string
  [key: string]: any
}

interface State {
  searchValue: string
  repositories: any[]
  startSearch: boolean
  errorSearch: boolean
}

const initialState = {
  searchValue: '',
  repositories: [],
  startSearch: false,
  errorSearch: false
}

export default subscribeAtom((state: State = initialState, action: A): State => {
  switch (action.type) {
    case START_SEARCH_REPOSITORIES:
      return {
        ...state,
        startSearch: true,
        errorSearch: false
      }

    case ERROR_SEARCH_REPOSITORIES:
      return {
        ...state,
        startSearch: false,
        errorSearch: true
      }

    case FETCH_SEARCH_REPOSITORIES:
      return {
        ...state,
        startSearch: false,
        errorSearch: !action.repositories.length,
        repositories: action.repositories
      }

    default:
      return state
  }
})
