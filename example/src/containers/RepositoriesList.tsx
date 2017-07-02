import * as React from 'react'
import { connect } from 'react-redux'
import { Repository } from '../components/Repository'
import { Wrapper } from '../components/Wrapper'

interface RepositoriesContainerProps {
  repositories?: any[]
  searchValue?: string
  startSearch?: boolean
  errorSearch?: boolean
}

const RepositoriesListContainer = ({
  searchValue = '',
  repositories = [],
  startSearch,
  errorSearch
}: RepositoriesContainerProps) =>
  <Wrapper>
    {!startSearch &&
      !errorSearch &&
      repositories.map(repository => <Repository key={repository.id} repository={repository} />)}
    {errorSearch && `We couldn’t find any repositories matching ${searchValue} ;(`}
    {startSearch && 'Loading...'}
  </Wrapper>

const mapStoreToProps = (state: any) => ({
  searchValue: state.searchValue,
  repositories: state.repositories,
  startSearch: state.startSearch,
  errorSearch: state.errorSearch
})

export const RepositoriesList = connect(mapStoreToProps)(RepositoriesListContainer)
