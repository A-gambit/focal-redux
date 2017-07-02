import * as React from 'react'
import { SearchField } from '../containers/SearchField'
import { RepositoriesList } from '../containers/RepositoriesList'

export const App = () =>
  <div>
    <SearchField />
    <RepositoriesList />
  </div>
