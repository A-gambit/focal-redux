import { fetchRepository } from '../utils/fetchRepository'
import {
  START_SEARCH_REPOSITORIES,
  ERROR_SEARCH_REPOSITORIES,
  FETCH_SEARCH_REPOSITORIES
} from '../constants'

export const fetchSerachRepos = (searchValue: string) => async (dispatch: Function) => {
  dispatch({ type: START_SEARCH_REPOSITORIES })
  try {
    const { items: repositories }: any = await fetchRepository(searchValue)
    dispatch({ type: FETCH_SEARCH_REPOSITORIES, repositories })
  } catch (err) {
    console.error(err)
    dispatch({ type: ERROR_SEARCH_REPOSITORIES })
  }
}
